import react, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AddTratamientos = () => {
     const  [tratamientos, setTratamientos] = useState({
             fechaAsignada: "",
             descripcion: "",
             fechaInicio: "",
             fechaFin: "",
             observaciones: "",
             paciete: ""             
         })
     
         const navigate = useNavigate();
     
         const handleChange = (e) =>{
             setTratamientos(prev =>({...prev, [e.target.name]:e.target.value}));
         };
     
         const handleClick = async e =>{
             e.preventDefault()
             try{
                 await axios.post("http://localhost:8800/tratamientos", tratamientos)
                 .then(res =>{
                     if(res.data === "Success"){
                         window.alert("Trataminto registrado con éxito")
                         navigate('/tratamientos')
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
               <h5>Adición de Tratamientos</h5>
               <label>Fecha Asignada:</label>
               <input type='date' name="fechaAsignada" onChange={handleChange}></input>
               <label>Descripcion:</label>
               <textarea type='text' name='descripcion' onChange={handleChange} rows={3}></textarea>
               <label>Fecha Inicio:</label>
               <input type='date' name='fechaInicio' onChange={handleChange}></input>
               <label>Fecha Fin:</label>
               <input type='date' name='fechaFin' onChange={handleChange}></input>
               <label>Observaciones:</label>
               <textarea type='text' name='observaciones' onChange={handleChange} row="3"></textarea>
               <label>Paciente:</label>
               <input type='number' name='paciente' onChange={handleChange}></input>
               <button className="btn btn-info" onClick={handleClick}>Registrar</button>
               <button className="btn btn-warning"><Link to="/tratamientos">Tratamientos</Link></button>
            </form>
         </div>
         )
     

}

export default AddTratamientos;
