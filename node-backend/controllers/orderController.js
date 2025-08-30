import orderModel from "../models/orderModel.js";

const newOrder = async (req, res) => {
  try {
    const body = req.body;
    const result = orderModel.create(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const showOrder= async (req,res)=>{
  try{
    const id=req.params.id;
    const result= await orderModel.find({email:id});
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};


export {newOrder,showOrder}