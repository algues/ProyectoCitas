import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateConsultorios = () => {

    const { _id } = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8800/consultorios/"+_id)
        .then(res => {
            console.log(res)
            setConsultorio(res.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    const [consultorio, setConsultorio] = useState({
        nombre: ""       
    });

    const navigate = useNavigate();
    const location = useLocation();
    const consultorioId = location.pathname.split("/")[2];

    const handleChange = (e) =>{
        setConsultorio(prev =>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/consultorios/"+ consultorioId, consultorio)
            navigate('/consultorios')
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="container">
          <form className="form">
             <h5 className="titulo">Modificar Consultorios</h5>
             <label>Nombre:</label>
             <input type="text" name="nombre" onChange={handleChange} value={consultorio.nombre}></input>
             <button className="btn btn-warning" onClick={handleClick}>Update</button>
             <button className="btn btn-info"><Link to="/consultorios">Consultorios</Link></button>
          </form> 
        </div>  
    )
}

export default UpdateConsultorios;