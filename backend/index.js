import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = mongoose();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Citas')   
    .then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

app.get("/", (req,res) => {
    res.json("Hello this is the Backend")
    });
    

app.listen(8800, () =>{
    console.log("Connected to Backend");
});