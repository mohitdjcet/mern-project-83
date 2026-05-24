import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/", userRoutes);

const PORT = 5001;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server Running on PORT ${PORT}`);
});