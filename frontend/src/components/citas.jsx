import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Citas = () => {

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
    
    const handleDelete = async (e) => {
        try{
            await axios.delete("http://localhost:8800/citas/"+_id);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                      <td colSpan={9}><h3 className='titulo'>Administrar Citas</h3></td>
                    </tr> 
                    <tr className='table-info'>
                        <th>Id</th>               
                        <th>Fecha</th> 
                        <td>Hora</td>
                        <td>Paciente</td>
                        <td>medico</td>
                        <td>Consultorio</td>
                        <td>Estado</td>
                        <td>Observaciones</td>
                        <th>Acciones</th>
                    </tr>        
                </thead>
                <tbody>
                   {citas.map((cita) =>(
                   <tr key={cita._id}>
                      <td>{cita._id}</td>
                      <td>{cita.fecha}</td>
                      <td>{cita.hora}</td>
                      <td>{cita.paciente}</td>
                      <td>{cita.medico}</td>
                      <td>{cita.consultorio}</td>
                      <td>{cita.estado}</td>
                      <td>{cita.observaciones}</td>
                      <button className='btn btn-danger' onClick={() => handleDelete(cita._id)}>Delete</button>
                      <button className='btn btn-info'><Link to={`/updateCitas/${cita._id}`}>Update</Link></button>
                   </tr>
                ))}
                </tbody>
                   <tr>
                     <td colSpan={9}>
                       <button className='btn btn-info'><Link to="/addCitas">Add Citas</Link></button>
                       <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                     </td>
                   </tr>
            </Table>
        </div>
    )

}

export default Citas;