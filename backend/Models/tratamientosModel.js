import mongoose from "mongoose";

const tratamientosSchema = new mongoose.Schema({
     fechaAsignda: {type:String, required:true},
     descripcion: {type:String, required:true},
     fechaInicio: {type:String, required:true},
     fechaFin: {type:String, required:true},
     observaciones: {type:String, reqired:true},
     paciente: {type:String, required:true}
},
 {timestamps:true}
)

const tratamientosModel = mongoose.model('tratamientos', tratamientosSchema)
export default tratamientosModel;