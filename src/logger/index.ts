import { config } from "dotenv";
import Log from "./methods/Log";
import { IEnv, ILoggerLogValue, ILoggerType, ILogOptions } from "./types";
import LogDate from "./utils/Date";
import { getEnvironment } from "./utils/Other";

config();

class Logger {
  environment: IEnv;

  constructor() {
    this.environment = getEnvironment();
    console.log(`🚀\tLogger has started on ${LogDate()}`);
    console.log(`⚙\tEnvironment is ${this.environment}\n`);
  }

  log = (
    category: ILoggerType,
    value: ILoggerLogValue,
    options: Omit<ILogOptions, "value"> = {}
  ) => Log(this.environment, { ...options, category, value });
}

export default Logger;
