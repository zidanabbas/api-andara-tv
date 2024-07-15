import express from "express";
import cors from "cors";
import prisma from "../prisma/prisma.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Enable cors
app.use(cors());

// API routes
app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

prisma
  .$connect()
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("error connecting to database", error);
    process.exit(1);
  });
