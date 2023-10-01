const { userModel } = require("../model/user.model");

const createUser = async payload => {
  try {
    const getUser = await userModel.findOne({ email: payload.email });
    if (getUser) throw new Error("User already created");
    const saveUser = await userModel.create(payload);
    return saveUser;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createUser };
