const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    vehicle_name: {
      type: String
    },
    vehicle_brand: {
      type: String
    },
    vehicle_number: {
      type: Number
    }
  },
  { timestamps: true }
);


const vehicleModel = mongoose.model("Vehicle", vehicleSchema);
module.exports = { vehicleModel };
