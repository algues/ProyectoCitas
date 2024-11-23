import mongoose from "mongoose";

const medicoSchema = new mongoose.Schema({
    identificacion: {type:String, required:true},
    apellidos: {type:String, required:true},
    nombres: {type:String, required:true},
    especialidad: {type:String, required:true}
    },
   {timestamps:true}
)

const medicoModel = medicoModel.model('medicos', medicoSchema)
export default medicoModel;