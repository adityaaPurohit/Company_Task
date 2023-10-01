const { mongoose, Schema } = require("mongoose");

const vehicleOwnerSchema = mongoose.Schema(
  {
    vehicle_id: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle"
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const vehicleOwnerModel = mongoose.model("VehicleOwner", vehicleOwnerSchema);
module.exports = { vehicleOwnerModel };
