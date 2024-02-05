const app = require("./src/app");
require("dotenv").config();

const port = process.env.APP_PORT;

console.log("port", port);

app
  .listen(port, () => {
    console.log(`Server is listening on ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
