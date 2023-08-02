import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import path from "path";
const app = express();
import router from "./router/index";

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public/student-images")));
// router
app.use("/api/v1/students", router);
//handle Error

export default app;
