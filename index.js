///////////NODE JS/////////////////////

// const http = require("http");

// const port = 4000;

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Welcome to backend");
//   res.end();
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//////////////// EXPRESSS JS///////////////

// import express from "express";

// const app = express();

// const port = 4000;

// app.get("/", (req, res) => {
//   console.log(req);
//   res.send("Welcome to backend");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

///////////// REACT JS /////////////////
import Cors from "cors";
import Cars from "./Data.js";
import express from "express";

const app = express();
// const host = "http://localhost:5173/";

app.use(Cors({ origin: "*" }));

const allData = [...Cars];
const port = 4000;

app.get("/", (req, res) => {
  // console.log(req);
  res.send(allData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
