import express from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("/ endpoint in http server");
});

app.get("/api", (req, res) => {
   res.send("/api endpoint in http server");
});

app.post("/api/login", (req, res) => {
   console.log(req.body);
   const username = req.body.username;
   const password = req.body.password;
   res.send(`Username: ${username} and Password: ${password}`);
});

http.createServer(app).listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
