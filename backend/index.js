import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import pacienteModel from 'Model/pacienteModel.js';
import medicoModel from 'Modelo/medicoModel.js';
import citasModel from 'Model/citasModel.js';
import consultorosModel from 'Model/consultorosModel.js';
import tratamientosModel from 'Model/tratamientosModel.js';

const app = mongoose();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Citas')   
    .then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

app.get("/", (req,res) => {
    res.json("Hello this is the Backend")
    });

app.get('/pacientes', async (req,res) =>{
    await pacienteModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}) 

app.get('/medicos', async (req,res) =>{
    await medicoModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/citas', async (req,res) =>{
    await citasModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}) 

app.get('/consultorios', async (req,res) =>{
    await consultorosModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.get('/tratamientos', async (req,res) =>{
    await tratamientosModel.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.listen(8800, () =>{
    console.log("Connected to Backend");
});