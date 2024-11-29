import mongoose from "mongoose";

const consultorioSchema = new mongoose.Schema({
      nombre: {type:String, required:true}
},
  {timestamps:true}
)

const consultorioModel = mongoose.model('consultorios', consultorioSchema)
export default consultorioModel;