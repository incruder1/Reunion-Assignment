import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import {Login} from "./login.js"
import {SignUp} from "./SignUp.js"
import propertyRoutes from "./routes/propertyRoutes.js"
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.post("/api/login", Login);
app.post("/api/signup", SignUp);
app.use("/api/property",propertyRoutes);



//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
