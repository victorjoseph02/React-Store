import express from "express";
import { newOrder,showOrder } from "../controllers/orderController.js";

const Router = express.Router();

Router.post("/neworder", newOrder);
Router.get("/showorder/:id",showOrder);

export default Router
