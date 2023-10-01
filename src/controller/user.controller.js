const { createUser } = require("../service/user.servic");

const addUser = async (req, res) => {
  try {
    const { body } = req;
    const userCreate = await createUser(body);
    res.status(201).send({
      status_code: 201,
      message: "user created successfully",
      data: userCreate
    });
  } catch (error) {
    res.status(400).send({
      status_code: 400,
      message: error.message
    });
  }
};

module.exports ={addUser}