const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 3000; // optional ports

app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}`);
});
