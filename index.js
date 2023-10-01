const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const routes = require("./src/routes/user.route");
const vehicleRoutes = require("./src/routes/vehicle.route");
const vehicleOnerRoutes = require("./src/routes/vehicle_owner.route");
const task2 = require("./src/routes/task2.route");

dotenv.config();
const Port = 9000;

const db_url =
  "mongodb+srv://mongoUser:aNVzj8uNqfov1TAo@cluster0.sjzc1.mongodb.net/task";

// Connect to mongoDB database
mongoose.connect(process.env.DB_URL || db_url);
const con = mongoose.connection;
con.on("open", () => {
  console.log("Database connected successfully");
});
app.use(express.json());
app.use("/user", routes);
app.use("/vehicle", vehicleRoutes);
app.use("/user_owned_vechicles", vehicleOnerRoutes);
app.use("/task2", task2);

// Assign port
app.listen(process.env.PORT || Port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
