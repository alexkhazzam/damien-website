const Express = require("Express");
const path = require("path");
const bodyParser = require("body-parser");

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(Express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", (req, res, next) => {
  res.render("home.ejs", {});
});

module.exports = app;
