const { vehicleOwnerModel } = require("../model/vihicle_owner.model");
const ObjectId = require("mongoose").Types.ObjectId;

const createVehicleOwner = async payload => {
  try {
    const getVehicleOwner = await vehicleOwnerModel.findOne({
      vehicle_id: payload.vehicle_id,
      user_id: payload.user_id
    });
    if (getVehicleOwner) throw new Error("Vehicle already owned by this user");
    const vehicle_obj = {
      vehicle_id: new ObjectId(payload.vehicle_id),
      user_id: new ObjectId(payload.user_id)
    };
    const saveVehicleOwner = await vehicleOwnerModel.create(vehicle_obj);
    return saveVehicleOwner;
  } catch (error) {
    throw new Error(error);
  }
};

const getOwnervehicles = async payload => {
  try {
    const getAllVehicleOfOwner = await vehicleOwnerModel.aggregate([
      {
        $match: {
          user_id: new ObjectId(payload.user_id)
        }
      },
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicle_id",
          foreignField: "_id",
          as: "Owner_Vehicles"
        }
      },
      {
        $project: {
          Owner_Vehicles: 1
        }
      }
    ]);
    return getAllVehicleOfOwner;
  } catch (error) {
    throw new Error(error);
  }
};

const getVehiclesWIthFilter = async payload => {
  try {
    let query = [];
    query.push(
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "Users"
        }
      },
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicle_id",
          foreignField: "_id",
          as: "Vehicles"
        }
      },
      {
        $unwind: "$Vehicles"
      },
      {
        $unwind: "$Users"
      },
      {
        $addFields: {
          owner: "$Users"
        }
      },
    );
    if (payload.filter) {
      query.push({
        $match: {
          $or: [
            {
              "Vehicles.vehicle_name": { $regex: payload.filter, $options: "i" }
            },
            {
              "Vehicles.vehicle_brand": {
                $regex: payload.filter,
                $options: "i"
              }
            }
          ]
        }
      });
    }
    const getAllVehicleWithFilter = await vehicleOwnerModel.aggregate(query);
    return getAllVehicleWithFilter;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createVehicleOwner,
  getOwnervehicles,
  getVehiclesWIthFilter
};
