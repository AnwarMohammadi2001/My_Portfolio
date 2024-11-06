// server.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", contactRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((error) => console.log("Database sync error:", error));
