const { createVehicleOwner, getOwnervehicles, getVehiclesWIthFilter } = require("../service/vehicle_owner.service");

const addVehicalOwner = async (req, res) => {
  try {
    const { query } = req;
    const ownerCreate = await createVehicleOwner(query);
    res.status(201).send({
      status_code: 201,
      message: "Vehical owned successfully",
      data: ownerCreate
    });
  } catch (error) {
    res.status(400).send({
      status_code: 400,
      message: error.message
    });
  }
};

const getVehicleByOwner = async (req, res) => {
    try {
      const { query } = req;
      const ownerVehicles = await getOwnervehicles(query);
      res.status(201).send({
        status_code: 201,
        message: "All vehicle of user",
        data: ownerVehicles
      });
    } catch (error) {
      res.status(400).send({
        status_code: 400,
        message: error.message
      });
    }
  };

  const getVehicleByFilter = async (req, res) => {
    try {
      const { query } = req;
      const vehiclesFiltered = await getVehiclesWIthFilter(query);
      res.status(201).send({
        status_code: 201,
        message: "All vehicle by filter",
        data: vehiclesFiltered
      });
    } catch (error) {
      res.status(400).send({
        status_code: 400,
        message: error.message
      });
    }
  };
  

module.exports = { addVehicalOwner, getVehicleByOwner, getVehicleByFilter };
