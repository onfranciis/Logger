import { LoggerOptions } from "./utils/Other";

export type ILoggerLogValue = string | object;
export type ILoggerType = keyof typeof LoggerOptions;
export type IEnv = "prod" | "dev";
export type ILogOptions = {
  category?: ILoggerType;
  value: ILoggerLogValue;
  verbose?: boolean;
};
export type ILog = (environment: IEnv, options: ILogOptions) => Promise<void>;
