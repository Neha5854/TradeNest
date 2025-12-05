const{model}=require("mongoose");

const { orderschema } = require("../schemas/orderschema");

const ordersmodel=new model("order",orderschema);
module.exports={ordersmodel};