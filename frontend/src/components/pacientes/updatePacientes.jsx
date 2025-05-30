import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePacientes = () => {

    const { _id } = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8800/pacientes/"+_id)
        .then(res => {
            console.log(res)
            setPaciente(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const [paciente, setPaciente] = useState({
        identificacion: "",
        apellidos: "", 
        nombres: "",
        fechaNacimiento: "",
        sexo: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const pacienteId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setPaciente(prev =>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/pacientes/"+ pacienteId, paciente)
            navigate('/pacientes')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="container">
          <form className="form">
             <h5 className="titulo">Modificar Pacientes</h5>
             <label>Identificacion:</label>
             <input type="numeric" name="identificacion" onChange={handleChange} value={paciente.identificacion}></input>
             <label>Apellidos:</label>
             <input type="text" name="apellidos" onChange={handleChange} value={paciente.apellidos}></input>
             <label>Nombres:</label>
             <input type="text" name="nombres" onChange={handleChange} value={paciente.nombres}></input>
             <label>Fecha Nacimiento:</label>
             <input type="date" name="fechaNacimiento" onChange={handleChange} value={paciente.fechaNacimiento}></input>
             <label>Sexo:</label>
             <input type="text" name="sexo" onChange={handleChange} value={paciente.sexo}></input>
             <button className="btn btn-warning" onClick={handleClick}>Update</button>
             <button className="btn btn-info"><Link to="/pacientes">Pacientes</Link></button>
          </form> 
        </div>  
    )
}

export default UpdatePacientes;