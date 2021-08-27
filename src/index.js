const {
  port,
  spreadsheetKey,
  serviceAccountKeyFile,
  spreadsheetRange,
} = require("./config");
const express = require("express");
const { google } = require("googleapis");
const app = express();

// route
app.get("/sheet1", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: serviceAccountKeyFile,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const authClientObject = await auth.getClient();
  const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
  });
  const sheet = await googleSheetsInstance.spreadsheets.values.get({
    auth,
    spreadsheetId: spreadsheetKey,
    range: spreadsheetRange,
  });
  res.json(sheet.data);
});

// listen
app.listen(port, () => {
  console.log(`Server listeing on port: ${port}`);
});
