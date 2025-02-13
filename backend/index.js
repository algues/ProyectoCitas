import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import pacienteModel from './models/pacienteModel.js';
import medicoModel from './models/medicoModel.js';
import citasModel from './models/citasModel.js';
import consultorioModel from './models/consultorioModel.js';
import tratamientosModel from './models/tratamientosModel.js';


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Citas')
    .then(db => console.log('Conexión Exitosa'))
    .catch(err => console.log('error: ', err))

app.get('/', (req,res) => {
    res.json('Hello this is the Backend')
});

app.get('/pacientes', async (req,res) =>{
     await pacienteModel.find()
     .then(data => res.json(data))
     .then(err => res.json(err))
});

app.get('/medicos', async (req,res) =>{
    await medicoModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.get('/citas', async (req,res) =>{
    await citasModel.find()
    .then(data => res.json(data))
    .catch(err = res.json(err))
});

app.get('consultorios', async (req,res) =>{
    await consultorioModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.get('/tratamientos', async (req,res) =>{
    await tratamientosModel.find()
    .then(data => res.json(data))
    .catch(err => res.json())
});

app.get('/pacientes/:_id', async (req,res) =>{
    const pacienteId = req.params._id
    await pacienteModel.find({_id:pacienteId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.get('/medicos/:_id', async (req,res) =>{
    const medicoId = req.params._id
    await medicoModel.find({_id:medicoId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.get('/consultorios/:_id', async (req,res) =>{
    const consultorioId = req.params._id
    await consultorioModel.find({_id:consultorioId})
    .then(data => res.json(data))
    .catch(err => res.data(err))
});

app.get('/citas/:_id', async (req,res) =>{
    const citasId = req.params._id
    await citasModel.find({_id:citasId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.get('tratamientos/:_id', async (req,res) =>{
    const tratamientosId = req.params._id
    await tratamientosModel.find({_id:tratamientosId})
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.post('/pacientes', async (req,res) =>{
    const paciente = new pacienteModel(req.body);
    const result = await paciente.save()
    .then(result => res.json('Success'))
    .catch(err => res.json(err))
});

app.post('/medicos', async (req,res) =>{
    const medico = new medicoModel(req.body);
    const result = await medico.save()
    .then(result => res.json("Success")) 
    .catch(err => res.json(err))
});

app.post('/citas', async (req,res)=>{
    const cita = new citasModel(req.body);
    const result = cita.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
});

app.post('/consultorios', async (req,res)=>{
    const consultorio = new consultorioModel(req.body);
    const result = consultorio.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
});

app.post('tratamientos', async (req,res) =>{
    const consultorio = new consultorioModel(req.body);
    const result = consultorio.save()
    .then(result => res.json("Success"))
    .catch(err => res.json(err))
});

app.put('/pacientes/:_id', async (req,res)=>{
    const pacienteId = req.params._id;
    const result = await pacienteModel.findByIdAndUpdate({_id:pacienteId}, {
        identificacion: req.body.identificacion,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo
    }) 
    res.json(result)
});

app.listen(8800, () => {
    console.log('Connected to Backend')
});
