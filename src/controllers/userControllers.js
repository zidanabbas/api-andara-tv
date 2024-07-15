import prisma from "../../prisma/prisma.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.status(200).send({
      message: "users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log("error fetching data", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const userById = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    res.status(200).send({
      message: "user fetched successfully",
      data: userById,
    });
  } catch (error) {
    console.error("error fetching data from id user", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).send({
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    console.error("error creating data", error);
    res.status(500).send({
      message: "Internal server error",
      data: null,
    });
  }
};
