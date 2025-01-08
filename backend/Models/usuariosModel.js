import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
      username: {type:String, required:true},
      password: {type:String, required:true}
},
  {timestamps:true}
)

const usuariosModel = mongoose.model('usuarios', usuariosSchema)
export default usuariosModel;