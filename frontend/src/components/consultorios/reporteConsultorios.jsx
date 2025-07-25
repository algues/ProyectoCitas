import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReporteConsultorios = () => {
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

    return(
        <div>
            <table className='table'>
                <thead>
                   <tr>
                     <td colSpan={1}><h3 className='titulo'>Reporte de Consultorios</h3></td>
                   </tr> 
                   <tr className='table-info'>                                  
                     <th>Nombre</th>                      
                   </tr>        
                </thead>
                <tbody>
                     {consultorios.map((consultorio) =>(
                        <tr key={consultorio._id}>
                           <td>{consultorio._id}</td>
                           <td>{consultorio.nombre}</td>                           
                        </tr>
                     ))}
                </tbody>
                <tr>
                  <td colSpan={1}>                    
                    <button className='btn btn-warning'><Link to="/home">Home</Link></button>
                  </td>
                </tr>
            </table>
        </div>
    )
}

export default ReporteConsultorios;