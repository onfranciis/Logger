export const LoggerOptions = {
  info: "info",
  warn: "warn",
  error: "error",
} as const;

export const getEnvironment = () => {
  const environment =
    process.env.environment ||
    process.env.Environment ||
    process.env.ENVIRONMENT ||
    process.env.Env ||
    process.env.ENV ||
    "dev";

  if (["prod", "production"].includes(environment.toLowerCase())) {
    return "prod";
  } else {
    return "dev";
  }
};
