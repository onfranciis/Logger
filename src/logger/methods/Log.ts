import { ILog } from "../types";
import Color, { BgColor } from "../utils/Color";
import LogDate from "../utils/Date";
import { LogToFile } from "../utils/File";

/**
 * Log
 *
 * @param options
 * Where does this log fall under?
 *
 * @param args
 * The value to be logged
 *
 */

const Log: ILog = async (
  environment,
  { category = "info", value, verbose }
) => {
  const { full } = LogDate();
  LogToFile(category, value);

  if (environment === "prod" || (!verbose && typeof value == "string")) {
    console.log(`⌚\t${full}\n`, value, "\n");
    return;
  }

  const response = [
    `🗳\tCategory: ${BgColor[category]}${Color.white} ${category} ${Color.reset}`,
    `⌚\t${full}`,
  ];

  console.log(response.join("\n"));

  console.log(
    `${BgColor.white}${Color.blue}     ⬇⬇⬇ VALUE ⬇⬇⬇   ${Color.reset}${Color.reset}`
  );
  if (typeof value === "string") {
    console.log(Color[category], value.trim(), Color.reset);
  } else {
    console.log(value);
  }

  console.log("\n");
};

export default Log;
