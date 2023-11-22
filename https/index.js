const express = require("express");
const fs = require("fs");
const path = require("path");
const https = require("https");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
   res.send("/ endpoint in https server");
});

app.get("/api", (req, res) => {
   res.send("/api endpoint in https server");
});

app.post("/api/login", (req, res) => {
   console.log(req.body);
   const username = req.body.username;
   const password = req.body.password;
   res.send(`Username: ${username} and Password: ${password}`);
});

https
   .createServer(
      {
         key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
         cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
      },
      app
   )
   .listen(port, () => {
      console.log(`Server listening on port ${port}`);
   });
