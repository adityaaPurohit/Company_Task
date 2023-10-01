const {
  addVehicalOwner,
  getVehicleByOwner,
  getVehicleByFilter
} = require("../controller/vehicle_owner.controller");
const express = require("express");
const vehicleOnerRoutes = express.Router();

vehicleOnerRoutes
  .post("", addVehicalOwner)
  .get("", getVehicleByOwner)
  .get("/filter", getVehicleByFilter);

module.exports = vehicleOnerRoutes;
