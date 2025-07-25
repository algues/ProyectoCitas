import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReporteMedicos = () => {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fecthAllMedicos = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/medicos/");
                setMedicos(res.data);

            }catch(err){
                console.log(err)
            }
        }
        fecthAllMedicos();
        
    }, []);

    return(
        <did>
            <table className='table'>
                <thead>
                   <tr>
                     <td colSpan={6}><h3 className='titulo'>Reporte de Medicos</h3></td>
                   </tr> 
                   <tr className='table-info'>
                     <th>Id</th>               
                     <th>Identificacion</th> 
                     <th>Apellidos</th>
                     <th>Nombres</th>
                     <th>especialidad</th>                     
                   </tr>        
                </thead>
                <tbody>
                     {medicos.map((medico) =>(
                        <tr key={medico._id}>
                           <td>{medico._id}</td>
                           <td>{medico.identificacion}</td>
                           <td>{medico.apellidos}</td>
                           <td>{medico.nombres}</td>
                           <td>{medico.especialidad}</td>                           
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={6}>                    
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </did>
    )
}

export default ReporteMedicos;