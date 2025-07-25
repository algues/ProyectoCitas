import react  from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const Home = () => {
    return(
        <Dropdown>
            <h3 className='titulo'>Centro Médico la María</h3>            
            <button className='btn btn-warning'><Link to="/pacientes">Pacientes</Link></button>
            <button className='btn btn-info'><Link to="/medicos">Medicos</Link></button>
            <button className='btn btn-warning'><Link to="/consultorios">Consultorios</Link></button>
            <button className='btn btn-info'><Link to="/citas">Citas</Link></button>
            <button className='btn btn-warning'><Link to="/tratamientos">Tratamientos</Link></button>               
            
               <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Reportes
               </Dropdown.Toggle>

               <Dropdown.Menu>
                 <Dropdown.Item href="/reportePacientes">Reporte de Pacientes</Dropdown.Item>
                 <Dropdown.Item href="/reporteMedicos">Reporte de Médicos</Dropdown.Item>
                 <Dropdown.Item href="/reporteConsultorios">Reporte de Consultorios</Dropdown.Item>
                 <Dropdown.Item href='/reporteCitas'>Reporte de Citas</Dropdown.Item>
                 <Dropdown.Item href='/reporteTratamientos'>Reporte de Tratamientos</Dropdown.Item> 
               </Dropdown.Menu>
                                                   
            <button className='btn btn-warning'><Link to="/">Logout</Link></button>
        </Dropdown>    
        
    )
}

export default Home;