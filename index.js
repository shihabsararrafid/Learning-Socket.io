const express = require("express");
const app = express();
const http = require("http");
const port = 5000 || process.env.PORT;
const server = http.createServer(app);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
server.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
