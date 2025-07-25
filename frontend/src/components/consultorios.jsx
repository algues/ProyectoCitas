import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Consultorios = () => {
    const [consultorios, setConsultorios] = useState([]);

    useEffect(() => {
        const fecthAllConsultorios = async () =>{
            try{
                const res = await axios.get("http://localhost:8800/consultorios/");
                setConsultorios(res.data);

            }catch(err){
                console.log(err)
            }
        }
        fecthAllConsultorios();
        
    }, []);

    const handleDelete = async (_id) => {
        try{
           await axios.delete("http://localhost:8800/consultorios/"+ _id);
           window.location.reload();
        }catch(err){
           console.log(err)
        }
    }

    return(
        <div>
            <table className='table table-bordered border-primary'>
                <thead>
                   <tr>
                     <td colSpan={3}><h3 className='titulo'>Administrar Consultorios</h3></td>
                   </tr> 
                   <tr className='table-info'>
                     <th>Id</th>               
                     <th>Nombre</th> 
                     <th>Acciones</th>
                   </tr>        
                </thead>
                <tbody>
                     {consultorios.map((consultorio) =>(
                        <tr key={consultorio._id}>
                           <td>{consultorio._id}</td>
                           <td>{consultorio.nombre}</td>
                           <button className='btn btn-danger' onClick={() => handleDelete(consultorio._id)}>Delete</button>
                           <button className='btn btn-info'><Link to={`/updateConsultorios/${consultorio._id}`}>Update</Link></button>
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={3}>
                    <button className='btn btn-info'><Link to="/addConsultorios">Add Consultorios</Link></button>
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </div>
    )
}

export default Consultorios;