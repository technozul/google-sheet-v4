const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  spreadsheetKey: process.env.SPREADSHEET_KEY,
  spreadsheetRange: "A1:C",
  serviceAccountKeyFile: path.resolve(__dirname, "../service-account.json"),
};
