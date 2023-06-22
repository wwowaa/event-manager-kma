//imports
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const eventHandler = require("./middleware/eventMiddleware");

const app = express();
const port = 3000;

//TODO is necessary?
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//view-engine
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(cookieParser());

//middleware
app.use(express.json());

//Set views
app.set("views", "./views");
app.set("view engine", "ejs");

//Database connection
const dbURI =
  "mongodb+srv://andcher:12345@cluster0.rogypfm.mongodb.net/node-auth";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () => console.info(`Listening on port ${port}`))
  )
  .catch((err) => console.log(err));

//Routes
app.get("*", checkUser);

app.get("", (req, res) => res.render("auth"));

//app.get("/event", requireAuth, (req, res) => res.render("event"));

app.get("/fullcalendar", requireAuth, (req, res) => res.render("fullcalendar"));

app.get("/mainpage", requireAuth, (req, res) => res.render("mainpage"));

//app.get("/passreset1", (req, res) => res.render("passreset1"));

//app.get("/passreset2", (req, res) => res.render("passreset2"));

app.get("/signup", (req, res) => res.render("signup"));

app.get("/auth", (req, res) => res.render("auth"));

app.get("/addevent", requireAuth, (req, res) => res.render("addevent"));

app.get("/:eventId", requireAuth, eventHandler, (req, res) => {
  res.render("event");
});
 

app.use(authRoutes);
app.use(eventRoutes);
