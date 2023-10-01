const { addVehicle } = require("../controller/vehicle.controller");
const express = require("express");
const vehicleRoutes = express.Router();

vehicleRoutes
.post("/create_vehicle", addVehicle);

module.exports =  vehicleRoutes ;
