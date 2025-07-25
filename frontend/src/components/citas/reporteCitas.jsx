import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ReporteCitas = () => {

    const [citas, setCitas] = useState([]);
 
    useEffect(() => {
        const fecthAllCitas = async () =>{
            try{
                 const res = await axios.get("http://localhost:8800/citas/");
                 setCitas(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllCitas();
    }, []);
    
    return(
        <div>
            <table className='table'>
                <thead>
                    <tr>
                      <td colSpan={7}><h3 className='titulo'>Reporte de Citas</h3></td>
                    </tr> 
                    <tr className='table-info'>                                     
                        <th>Fecha</th> 
                        <td>Hora</td>
                        <td>Paciente</td>
                        <td>medico</td>
                        <td>Consultorio</td>
                        <td>Estado</td>
                        <td>Observaciones</td>                        
                    </tr>        
                </thead>
                <tbody>
                   {citas.map((cita) =>(
                   <tr key={cita._id}>                      
                      <td>{cita.fecha}</td>
                      <td>{cita.hora}</td>
                      <td>{cita.paciente}</td>
                      <td>{cita.medico}</td>
                      <td>{cita.consultorio}</td>
                      <td>{cita.estado}</td>
                      <td>{cita.observaciones}</td>                      
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

export default ReporteCitas;
