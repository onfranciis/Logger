import Log from "./logger";

const Logger = new Log().log;

Logger("error", "Test");
Logger("warn", ["Test"]);
Logger("info", {
  rating: 2,
  comment: "Not as described!",
  date: "2024-05-23T08:56:21.618Z",
  reviewerName: "Nolan Gonzalez",
  reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
});
