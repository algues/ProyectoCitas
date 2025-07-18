import react, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AddCitas = () => {
     const  [citas, setCitas] = useState({
             fecha: "",
             hora: "",
             paciente: "",
             medico: "",
             consultorio: "",
             estado: "",
             observaciones: ""
         })
     
         const navigate = useNavigate();
     
         const handleChange = (e) =>{
             setCitas(prev =>({...prev, [e.target.name]:e.taget.value}));
         };
     
         const handleClick = async e =>{
             e.preventDefault()
             try{
                 await axios.post("http://localhost:8000/citas", citas)
                 then(res =>{
                     if(res.data == "Success"){
                         window.alert("Cita registrado con éxito")
                         navigate('/citas')
                     }else{
                         window.alert("Registro fallido")
                     }
                 })
             }catch(err){
                 console.log(err)
             }
         }
     
         return(
         <div className='container'>
            <form className='form'>
               <h5>Adición de Citas</h5>
               <label>Fecha:</label>
               <input type='date' name="fecha" onChange={handleChange}></input>
               <label>Hora:</label>
               <input type='text' name='hora' onChange={handleChange}></input>
               <label>Paciente:</label>
               <input type='nemeric' name='paciente' onChange={handleChange}></input>
               <label>Médico:</label>
               <input type='numeric' name='medico' onChange={handleChange}></input>
               <label>Consultorio:</label>
               <input type='nemeric' name='consultorio' onChange={handleChange}></input>
               <label>Estado:</label>
               <input type='text' name='estado' onChange={handleChange}></input>
               <label>Observaciones:</label>
               <textarea type='text' name='observaciones' onChange={handleChange}></textarea>
               <button className="btn btn-info" onClick={handleClick}>Registrar</button>
               <button className="btn btn-warning"><Link to="/citas">Citas</Link></button>
            </form>
         </div>
         )
     

}

export default AddCitas;
