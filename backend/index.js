import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import citasModel from './models/citasModel.js';
import usuariosModel from './models/usuariosModel.js'
import pacienteModel from './models/pacienteModel.js'
import medicoModel from './models/medicoModel.js'
import consultorioModel from './models/consultorioModel.js'
import tratamientosModel from './models/tratamientosModel.js'

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Citas')
    .then(db => console.log("Conexion Exitosa a la Base de datos"))
    .catch(err => console.log("err:", err))

app.get('/pacientes', async (req,res) => {
    await pacienteModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get("/medicos", async (req, res) =>{
    await medicoModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get("/consultorios", async (req, res) =>{
    await consultorioModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/citas', async (req, res) =>{
    await citasModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})
 app.get('/tratamientos', async (req, res) =>{
    await tratamientosModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
 })

app.get('/pacientes/:_id', async (req,res) =>{
    const pacienteId = req.params._id
    await pacienteModel.find({_id:pacienteId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/medicos/:_id', async (req, res) =>{
    const medicoId = req.params._id
    await medicoModel.find({_id:medicoId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/consultorios/:_id', async (req, res) =>{
    const consultorioId = req.params._id;
    await consultorioModel.find({_id:consultorioId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/citas/:_id', async (req, res) =>{
    const citasId = req.params._id;
    await citasModel.find({_id:citasId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/tratamientos/:_id', async (req, res) =>{
    const tratamientoId = req.params._id;
    await tratamientosModel.find({_id:tratamientoId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.post('/pacientes', async (req, res) =>{
    const paciente = new pacienteModel(req.body);
    const result = await paciente.save()
    .then(result => res.json('Success'))
    .catch(err => res.json(err))

})

app.post('/medicos', async (req, res) =>{
    const medico = new medicoModel(req.body);
    const result = await medico.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
})

app.post('/consultorios', async (req, res) =>{
    const consultorio = new consultorioModel(req.body);
    const result = await consultorio.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
})

app.post('/citas', async (req, res) =>{
    const citas = new citasModel(req.body);
    const result = await citas.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
})

app.post('/tratamientos', async (req, res) =>{
    const tratamientos = new tratamientosModel(req.body);
    const result = await tratamientos.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
})

app.delete('/pacientes/:_id', async (req,res) => {
    const pacienteId = req.params._id;
    const result = await pacienteModel.deleteOne({_id:pacienteId});
    res.json(result)
    
})

app.delete('/medicos/:_id', async (req, res) =>{
    const medicoId = req.params._id;
    const result = await medicoModel.deleteOne({_id:medicoId});
    res.json(result)
})

app.delete('/consultorios/:_id', async (req, res) =>{
    const consultorioId = req.params._id;
    const result = await consultorioModel.deleteOne({_id:consultorioId});
    res.json(result)
})

app.delete('/citas/:_id', async (req, res) =>{
    const citasId = req.params._id;
    const result = await citasModel.deleteOne({_id:citasId});
    res.json(result)
})

app.delete('/tratamientos/:_id', async (req, res) =>{
    const tratamientoId = req.params._id;
    const result = await tratamientosModel.deleteOne({_id:tratamientoId})
    res.json(result)
})

app.put('/pacientes/:_id', async (req, res) =>{
    const pacienteId = req.params._id;
    const result = await pacienteModel.findByIdAndUpdate({_id:pacienteId}, {
        identificacion: req.body.identificacion,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo
    })
    res.json(result)
})

app.put('/medicos/:_id', async (req, res) =>{
    const medicoId = req.params._id;
    const result = await medicoModel.findByIdAndUpdate({_id:medicoId}, {
        identificacion: req.body.identificacion,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        especialidad: req.body.especialidad
    })
    res.json(result)
})

app.put('/consultorios/:_id', async (req, res) =>{
    const consultorioId = req.params._id;
    const result = await consultorioModel.findByIdAndUpdate({_id:consultorioId}, {
        nombre: req.body.nombre
    })
    res.json(result) 
})

app.put('/citas/:_id', async (req, res) =>{
    const citasId = req.params._id;
    const result = await citasModel.findByIdAndUpdate({_id:citasId}, {
        fecha: req.body.fecha,
        hora: req.body.hora,
        paciente: req.body.paciente,
        medico: req.body.medico,
        consultorio: req.body.consultorio,
        estado: req.body.estado,
        observaciones: req.body.observaciones
    })
    res.json(result)
})

app.put('/tratamientos/:_id', async (req, res) =>{
    const tratamientoId = req.params._id;
    const result = await tratamientosModel.findByIdAndUpdate({_id:tratamientoId}, {
        fechaAsignada: req.body.fechaAsignada,
        descripcion: req.body.descripcion,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        observaciones: req.body.observaciones,
        paciente: req.body.paciente,
    })
    res.json(result)
})

app.post('/login', async (req,res) =>{
    const {username, password} = req.body;
    const result = await usuariosModel.findOne({username, password})
    if(result) return res.json("Success")
    return res.json("Usuario no registrado")       
});

app.listen(8800, () => {
    console.log("Conectado a tu Backend")
})