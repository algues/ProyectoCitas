import react from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const AddPatients = () => {

    const [paciente, setPaciente] = useState({
        identificacion: "",
        apellidos: "",
        nombres: "",
        fechaNacimiento: "",
        sexo: ""

    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setPaciente(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
       e.preventDefault()
       try{
          await axios.post("http://localhost:8800/pacientes", paciente)
          .then(res => {
             if(res.data === "Success") {
                window.alert("Paciente registrado con exito")
                navigate('/pacientes')
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
            <h5>Adición de Pacientes</h5>
            <label>Identificación:</label>
            <input type='numeric' name='identificacion' onChange={handleChange}></input>
            <label>Nombres:</label>
            <input type='text' name='nombres' onChange={handleChange}></input>
            <label>Apellidos:</label>
            <input type='text' name='apellidos' onChange={handleChange}></input>
            <label>Fecha Nacimiento:</label>
            <input type='date' name='fechaNacimiento' onChange={handleChange}></input>
            <label>Sexo:</label>
            <input type='text' name='sexo' onChange={handleChange}></input>
            <button className='btn btn-info' onClick={handleClick}>Registrar</button>
            <button className='btn btn-warning'><Link to="/pacientes">Pacientes</Link></button>
         </form>
      </div>
    )
}

export default AddPatients;
