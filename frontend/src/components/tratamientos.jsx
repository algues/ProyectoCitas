import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Tratamientos = () => {

    const [tratamientos, setTratamientos] = useState([]);

    useEffect(() => {
        const fecthAllTratamientos = async () => {
            try {
                const res = await axios.get("http://localhost:8800/tratamientos/");
                setTratamientos(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllTratamientos();

    }, []);

    const handleDelete = async (_id) => {
        try {
            await axios.delete("http://localhost:8800/tratamientos/" + _id);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Table>
                <head>
                    <tr>
                        <td colSpan={8}><h3 className='titulo'>Administrar Tratamientos</h3></td>
                    </tr>
                    <tr className='table-info'>
                        <th>Id</th>
                        <th>Fecha Asignada</th>
                        <td>Descripcion</td>
                        <td>Fecha Inicio</td>
                        <td>Fecha Finalizacion</td>
                        <td>Observaciones</td>
                        <td>Paciente</td>
                        <th>Acciones</th>
                    </tr>
                </head>
                <tbody>
                    {tratamientos.map((tratamiento) => (
                        <tr key={tratamiento._id}>
                            <td>{tratamiento._id}</td>
                            <td>{tratamiento.fechaAsignada}</td>
                            <td>{tratamiento.descripcion}</td>
                            <td>{tratamiento.fechaInicio}</td>
                            <td>{tratamiento.fechFin}</td>
                            <td>{tratamiento.observaciones}</td>
                            <td>{tratamiento.paciente}</td>
                            <button className='btn btn-danger' onClick={() => handleDelete(tratamiento._id)}>Delete</button>
                            <button className='btn btn-info'><Link to={`/updateTratamientos/${tratamiento._id}`}>Update</Link></button>
                        </tr>
                    ))}
                </tbody>
                <tr>
                    <td colSpan={8}>
                      <button className='btn btn-info'><Link to="/addTratamientos">Add Tratamientos</Link></button>
                      <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                    </td>
                </tr>
            </Table>
        </div>
    )
}

export default Tratamientos;
