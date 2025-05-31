import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCitas = () => {

    const { _id } = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8800/citas/"+_id)
        .then(res => {
            console.log(res)
            setCitas(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const [cita, setCita] = useState({
        fecha: "",
        hora: "", 
        paciente: "",
        medico: "",
        consultorio: "",
        estado: "",
        observaciones: ""    
    });

    const navigate = useNavigate();
    const location = useLocation();
    const citaId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setCita(prev =>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/citas/"+ citaId, cita)
            navigate('/citas')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="container">
          <form className="form">
             <h5 className="titulo">Modificar  Citas</h5>
             <label>Fecha:</label>
             <input type="date" name="fecha" onChange={handleChange} value={cita.fecha}></input>
             <label>Hora:</label>
             <input type="text" name="hora" onChange={handleChange} value={cita.hora}></input>
             <label>Paciente:</label>
             <input type="number" name="paciente" onChange={handleChange} value={cita.paciente}></input>
             <label>Médico:</label>
             <input type="number" name="medico" onChange={handleChange} value={cita.medico}></input>
             <label>Consultorio:</label>
             <input type="number" name="consultorio" onChange={handleChange} value={cita.consultorio}></input>
             <label>Estado:</label>
             <input type="text" name="estado" onChange={handleChange} value={cita.estado}></input>
             <label>Observaciones:</label>
             <textarea type="text" name="observaciones" onChange={handleChange} value={cita.observaciones} rows={3}></textarea>
             <button className="btn btn-warning" onClick={handleClick}>Update</button>
             <button className="btn btn-info"><Link to="/medicos">Médicos</Link></button>
          </form> 
        </div>  
    )
}

export default UpdateCitas;