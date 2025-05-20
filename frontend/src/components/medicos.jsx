import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Medicos = () => {
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

    const handleDelete = async (_id) => {
        try{
           await axios.delete("http://localhost:8800/medicos/"+ _id);
           window.location.reload();
        }catch(err){
           console.log(err)
        }
    }

    return(
        <did>
            <Table>
                <thead>
                   <tr>
                     <td colSpan={7}><h3 className='titulo'>Administrar Medicos</h3></td>
                   </tr> 
                   <tr className='table-info'>
                     <th>Id</th>               
                     <th>Identificacion</th> 
                     <th>Apellidos</th>
                     <th>Nombres</th>
                     <th>especialidad</th>
                     <th>Acciones</th>
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
                           <button className='btn btn-danger' onClick={() => handleDelete(medico._id)}>Delete</button>
                           <button className='btn btn-info'><Link to={`/updateMedicos/${medico._id}`}>Update</Link></button>
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={7}>
                    <button className='btn btn-info'><Link to="/addMedicos">Add Medicos</Link></button>
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </Table>
        </did>
    )
}

export default Medicos;