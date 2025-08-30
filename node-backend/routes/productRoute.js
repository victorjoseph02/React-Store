import { showProducts,deleteProduct,updateProduct,createproduct } from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/showproducts", showProducts);
router.delete("/deleteproduct/:id",deleteProduct)
router.patch("/updateproduct/:id",updateProduct)
router.post("/createproduct",createproduct)
export default router;
