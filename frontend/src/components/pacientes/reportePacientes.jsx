import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReportePacientes = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        const fecthAllPacientes = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/pacientes/");
                setPacientes(res.data);

            }catch(err){
                console.log(err)
            }
        }
        fecthAllPacientes();
        
    }, []);

    
    return(
        <div>
            <table className='table'>
                <thead>
                   <tr>
                     <td colSpan={6}><h3 className='titulo'>Reporte de Pacientes</h3></td>
                   </tr> 
                   <tr className='table-info'>
                     <th>Id</th>               
                     <th>Identificacion</th> 
                     <th>Apellidos</th>
                     <th>Nombres</th>
                     <th>Fecha Nacimiento</th>
                     <th>Sexo</th>                    
                   </tr>        
                </thead>
                <tbody>
                     {pacientes.map((paciente) =>(
                        <tr key={paciente._id}>
                           <td>{paciente._id}</td>
                           <td>{paciente.identificacion}</td>
                           <td>{paciente.apellidos}</td>
                           <td>{paciente.nombres}</td>
                           <td>{paciente.fechaNacimiento}</td>
                           <td>{paciente.sexo}</td>                           
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={6}>                    
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </div>
    )
}

export default ReportePacientes;
