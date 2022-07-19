const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public")); // this need to be added to the server otherwise the css file won't be recognised

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(5501, () => {
  console.log(`hello from the app server from port 5501`);
});
