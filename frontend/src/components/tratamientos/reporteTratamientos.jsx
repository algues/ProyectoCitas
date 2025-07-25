import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ReporteTratamientos = () =>{

    const [tratamientos, setTratamientos] = useState([]);

    useEffect(() =>{
         const fecthAllTratamientos = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/tratamientos/");
                setTratamientos(res.data);
            }catch(err){
               console.log(err)
            }
         }
         fecthAllTratamientos();

    }, []);

    
    return(
        <div>
            <table className='table'>
                <thead>
                   <tr>
                     <td colSpan={7}><h3 className='titulo'>Reporte de Tratamientos</h3></td>
                   </tr> 
                   <tr className=''>
                     <th>Id</th>               
                     <th>Feha Asignada</th> 
                     <th>Descripcion</th>
                     <th>Fecha Inicio</th>
                     <th>Fecha Finalizacion</th>
                     <th>Observaciones</th>
                     <th>Paciente</th>                     
                   </tr>        
                </thead>
                <tbody>
                     {tratamientos.map((tratamiento) =>(
                        <tr key={tratamiento._id}>
                           <td>{tratamiento._id}</td>
                           <td>{tratamiento.fechaAsignada}</td>
                           <td>{tratamiento.descripcion}</td>
                           <td>{tratamiento.fechaInicio}</td>
                           <td>{tratamiento.fechaFin}</td>
                           <td>{tratamiento.observaciones}</td>
                           <td>{tratamiento.paciente}</td>                           
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={7}>                    
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </div>
        
    )
}

export default ReporteTratamientos;
    
                       

