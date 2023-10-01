const { vehicleModel } = require("../model/vehicle.model");

const createVehicle = async payload => {
  try {
    const getVehicle = await vehicleModel.findOne({
      vehicle_number: payload.vehicle_number
    });
    if (getVehicle) throw new Error("Vehicle already created");
    const saveVehicle = await vehicleModel.create(payload);
    return saveVehicle;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createVehicle };
