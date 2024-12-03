import mongoose from "mongoose";

const citasSchema = new mongoose.Schema({
    fecha: {type:Date, required:true},
    hora: {type:String, required:true},
    paciente: {type:String, required:true},
    medico: {type:String, required:true},
    consultorio: {type:String, required:true},
    estado: {type:String, required:true},
    observaciones: {type:String, required:true}
   },
   {timestamps:true}
)

const citasModel = mongoose.model('citas', citasSchema)
export default citasModel;