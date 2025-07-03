import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pacientes = () => {
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

    const handleDelete = async (_id) => {
        try{
           await axios.delete("http://localhost:8800/pacientes/"+ _id);
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
                     <td colSpan={7}><h3 className='titulo'>Administrar Pacientes</h3></td>
                   </tr> 
                   <tr className='table-info'>
                     <th>Id</th>               
                     <th>Identificacion</th> 
                     <th>Apellidos</th>
                     <th>Nombres</th>
                     <th>Fecha Nacimiento</th>
                     <th>Sexo</th>
                     <th>Acciones</th>
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
                           <button className='btn btn-danger' onClick={() => handleDelete(paciente._id)}>Delete</button>
                           <button className='btn btn-info'><Link to={`/updatePacientes/${paciente._id}`}>Update</Link></button>
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={7}>
                    <button className='btn btn-info'><Link to="/addPacientes">Add Paciente</Link></button>
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </Table>
        </div>
    )
}

export default Pacientes;
