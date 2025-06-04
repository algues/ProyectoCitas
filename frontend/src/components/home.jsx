import react  from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h3 className='titulo'>Centro Médico la María</h3>
            <button className='btn btn-info'><Link to="/home">Home</Link></button>
            <button className='btn btn-warning'><Link to="/pacientes">Pacientes</Link></button>
            <button className='btn btn-info'><Link to="/medicos">Medicos</Link></button>
            <button className='btn btn-warning'><Link to="/consultorios">Consultorios</Link></button>
            <button className='btn btn-info'><Link to="/citas">Citas</Link></button>
            <button className='btn btn-warning'><Link to="/tratamientos">Tratamientos</Link></button>
            <button className='btn btn-info'><Link to="/">Logout</Link></button>
        </div>
    )
}

export default Home;