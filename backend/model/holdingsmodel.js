const{model}=require("mongoose");

const{holdingschema}=require("../schemas/holdingschemas");
const holdingsmodel=new model("holding",holdingschema);
module.exports={holdingsmodel};