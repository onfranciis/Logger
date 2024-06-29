import { createWriteStream, mkdir } from "fs";
import path from "path";
import LogDate from "./Date";
import { ILoggerLogValue, ILoggerType } from "../types";

export const LogToFile = async (
  category: ILoggerType,
  message: ILoggerLogValue
) => {
  const { date, month, year, time } = LogDate();
  const dirPath = path.resolve(`./logs/${year}/${month}`);

  try {
    const filePath = path.resolve(dirPath, `${date}.log`);
    const lines = [
      `========== ${time} `,
      `========== ${category.toUpperCase()} `,
      `==================== `,
      `${JSON.stringify(message)
        .replaceAll(',"', ',\n"')
        .replace("{", "{\n")
        .replace("}", "\n}")}`,
      `==================== \n\n\n\n`,
    ].join("\n");

    const template = lines;

    mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        console.error(
          `Something went wrong and couldn't create the log folder`
        );
      } else {
        const logStream = createWriteStream(filePath, { flags: "a+" });
        logStream.end(template);
      }
    });
  } catch (err) {
    console.error(`Log couldn't be saved!`);
  }
};
