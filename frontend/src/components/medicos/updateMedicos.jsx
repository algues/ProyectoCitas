import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateMedicos = () => {

    const { _id } = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8800/medicos/"+_id)
        .then(res => {
            console.log(res)
            setMedico(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const [medico, setMedico] = useState({
        identificacion: "",
        apellidos: "", 
        nombres: "",
        especialidad: ""    
    });

    const navigate = useNavigate();
    const location = useLocation();
    const medicoId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setMedico(prev =>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/medicos/"+ medicoId, medico)
            navigate('/medicos')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="container">
          <form className="form">
             <h5 className="titulo">Modificar Médicos</h5>
             <label>Identificacion:</label>
             <input type="numeric" name="identificacion" onChange={handleChange} value={medico.identificacion}></input>
             <label>Apellidos:</label>
             <input type="text" name="apellidos" onChange={handleChange} value={medico.apellidos}></input>
             <label>Nombres:</label>
             <input type="text" name="nombres" onChange={handleChange} value={medico.nombres}></input>
             <label>Especiaidad:</label>
             <input type="text" name="especialidad" onChange={handleChange} value={medico.especialidad}></input>
             <button className="btn btn-warning" onClick={handleClick}>Update</button>
             <button className="btn btn-info"><Link to="/medicos">Médicos</Link></button>
          </form> 
        </div>  
    )
}

export default UpdateMedicos;
