import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  // updateUser,
  // deleteUser,
} from "../controllers/userControllers.js";

router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.post("/users", createUser);
// router.patch("/users/:userId", updateUser);
// router.delete("/users/:userId", deleteUser);

export default router;
