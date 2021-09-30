const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

require('../backend/routes/users.route.js')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});