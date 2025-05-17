import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import AddPacientes from './components/pacientes/addPacientes';
import AddMedicos from './components/medicos/addMedicos';
import AddConsultorios from './components/consultorios/addConsutorios';
import AddTratamientos from './components/tratamientos/addTratamiento';
import AddCitas from './components/citas/AddCitas';

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
               <Route path='/updatePacientes/:_id' element={<UpdatePacientes />}></Route>
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
               <Route path='/addTratamiento' element={<AddTratamientos />}></Route>
               <Route path='/updateTratamiento/:_id' element={<UpdateTratamintos />}></Route>
           </Routes>
       </Router>          
      </header>
    </div>
  );
}

export default App;
