import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTratamintos = () => {

    const { _id } = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8800/tratamientos/"+_id)
        .then(res => {
            console.log(res)
            setTratamiento(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const [tratamiento, setTratamiento] = useState({
        fechaAsignada: "",
        descripcion: "", 
        fechaInicio: "",
        fechaFin: "",
        observaciones: "",
        paciente: ""            
    });

    const navigate = useNavigate();
    const location = useLocation();
    const tratamientoId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setTratamiento(prev =>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/tratamientos/"+ tratamientoId, tratamiento)
            navigate('/tratamientos')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="container">
          <form className="form">
             <h5 className="titulo">Modificar  Tratamientos</h5>
             <label>Fecha Asignada:</label>
             <input type="date" name="fechaAsignada" onChange={handleChange} value={tratamiento.fechaAsignada}></input>
             <label>Descripcion:</label>
             <textarea type="text" name="descripcion" onChange={handleChange} value={tratamiento.descripcion} rows={3}></textarea>
             <label>Fecha Inicio:</label>
             <input type="date" name="fechaInicio" onChange={handleChange} value={tratamiento.fechaInicio}></input>
             <label>Fecha Fin:</label>
             <input type="date" name="fechaFin" onChange={handleChange} value={tratamiento.fechaFin}></input>
             <label>Observaciones:</label>
             <textarea type="text" name="observaciones" onChange={handleChange} value={tratamiento.observaciones} rows={3}></textarea>
             <label>Paciente:</label>
             <input type="number" name="paciente" onChange={handleChange} value={tratamiento.paciente}></input>
             <button className="btn btn-warning" onClick={handleClick}>Update</button>
             <button className="btn btn-info"><Link to="/tratamientos">Tratamientos</Link></button>
          </form> 
        </div>  
    )
}

export default UpdateTratamintos;