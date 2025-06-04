import react from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const AddPacientes = () => {

    const [medico, setMedico] = useState({
        identificacion: "",
        apellidos: "",
        nombres: "",
        especialidad: ""
        
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMedico(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
       e.preventDefault()
       try{
          await axios.post("http://localhost:8800/medicos", medico)
          .then(res => {
             if(res.data === "Success") {
                window.alert("Médico registrado con exito")
                navigate('/medicos')
             }else{
                window.alert("Registro fallido")
             }
          })
       }catch (err){
          console.log(err)
       }
    }

    return(
      <div className='container'>
         <form className='form'>
            <h5>Adición de Médicos</h5>
            <label>Identificación:</label>
            <input type='numeric' name='identificacion' onChange={handleChange}></input>
            <label>Nombres:</label>
            <input type='text' name='nombres' onChange={handleChange}></input>
            <label>Apellidos:</label>
            <input type='text' name='apellidos' onChange={handleChange}></input>
            <label>Especialidad:</label>
            <input type='text' name='especialidad' onChange={handleChange}></input>
            <button className='btn btn-info' onClick={handleClick}>Registrar</button>
            <button className='btn btn-warning'><Link to="/medicos">Médicos</Link></button>
         </form>
      </div>
    )
}

export default AddPacientes;