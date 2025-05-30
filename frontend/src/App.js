import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import AddPacientes from './components/pacientes/addPacientes';
import AddMedicos from './components/medicos/addMedicos';
import AddConsultorios from './components/consultorios/addConsultorios';
import AddCitas from './components/citas/AddCitas';
import Pacientes from './components/pacientes';
import Medicos from './components/medicos';
import Citas from './components/citas';
import Consultorios from './components/consultorios';
import Tratamientos from './components/tratamientos';
import AddTratamientos from './components/tratamientos/addTratamientos';
import UpdatePacientes from './components/pacientes/updatePacientes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
           <Routes>
               <Route path='/' element={<Login />}></Route>
               <Route path='/home' element={<Home />}></Route>
               <Route path='/pacientes' element={<Pacientes />}></Route>               
               <Route path='/addPacientes' element={<AddPacientes />}></Route>
               <Route path='/updatePacietes' element={<UpdatePacientes />}></Route>
               <Route path='/medicos' element={<Medicos />}></Route>
               <Route path='/addMedicos' element={<AddMedicos />}></Route>
               <Route path='/updateMedicos/:_id' element={<UpdateMedicos />}></Route>
               <Route path='/consultorios' element={<Consultorios />}></Route>
               <Route path='/addConsultorios' element={<AddConsultorios />}></Route>
               <Route path='/updateConsultorios/:_id' element={<UpdateConsultorios />}></Route>
               <Route path='/citas' element={<Citas />}></Route>
               <Route path='/addCitas' element={<AddCitas />}></Route>
               <Route path='/updateCitas/:_id' element={<UpdateCitas />}></Route>
               <Route path='/tratamientos' element={<Tratamientos />}></Route>
               <Route path='/addTratamientos' element={<AddTratamientos />}></Route>
               <Route path='/updateTratamiento/:_id' element={<UpdateTratamintos />}></Route>
           </Routes>
       </Router>          
      </header>
    </div>
  );
}

export default App;
