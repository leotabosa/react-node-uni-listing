const express = require("express");
const port = 3002;
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

routes(app);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
