import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
    identificacion: {type:String, required:true},
    apellidos: {type:String, required:true},
    nombres: {type:String, required:true},
    fechaNacimiento: {type:String, required:true},
    sexo: {type:String, required:true}
   },
   {timestamps:true}

)

const pacienteModel = mongoose.model('pacientes', pacienteSchema)
export default pacienteModel;