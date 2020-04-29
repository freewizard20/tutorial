const passport = require("passport");
const express = require("express");

const app = express();

app.post("/login", passport.authenticate("github"), function (req, res) {
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("helloworld");
});

app.listen(8080, () => {
  console.log("8080808080");
});

/*const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  "https://www.googleapis.com/auth/blogger",
  "https://www.googleapis.com/auth/calendar",
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  scope: scopes,
});
*/
