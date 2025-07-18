import react, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddConsultorios = () =>{

    const  [consultorio, setConsultorio] = useState({
        nombre: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setConsultorio(prev =>({...prev, [e.target.name]:e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/consultorios", consultorio)
            .then(res =>{
                if(res.data == "Success"){
                    window.alert("Consultorio registrado con éxito")
                    navigate('/consultorios')
                }else{
                    window.alert("Registro fallido")
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
    <div className="container">
       <form className="form">
          <h5>Adición de Consultorios</h5>
          <label>Nombre Consultorio:</label>
          <input type='text' name="nombre" onChange={handleChange}></input>
          <button className="btn btn-info" onClick={handleClick}>Registrar</button>
          <button className="btn btn-warning"><Link to="/consultorios">Consultorios</Link></button>
       </form>
    </div>
    )

}

export default AddConsultorios;
