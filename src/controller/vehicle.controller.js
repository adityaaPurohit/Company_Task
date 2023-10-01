const { createVehicle } = require("../service/vehicle.service");

const addVehicle = async (req, res) => {
  try {
    const { body } = req;
    const vehicleCreate = await createVehicle(body);
    res.status(201).send({
      status_code: 201,
      message: "vehicle created successfully",
      data: vehicleCreate
    });
  } catch (error) {
    res.status(400).send({
      status_code: 400,
      message: error.message
    });
  }
};

module.exports = { addVehicle };
