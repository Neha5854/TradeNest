const{model}=require("mongoose");

const{positionschema}=require("../schemas/positionschema");
const positionsmodel=new model("position",positionschema);
module.exports={positionsmodel};