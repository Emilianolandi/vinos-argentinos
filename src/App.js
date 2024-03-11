 import { Routes, Route} from 'react-router-dom';
import './App.css';

import Inicio from './paginas/Inicio';
import Discografia from './paginas/Discografia';

import Contacto from './paginas/Contacto';
import Layout from './paginas/Layout';





function App() {

    return (
      <div className="App">
      <Routes>
       
          <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="discografia" element={<Discografia/>}/>
          
          <Route path="contacto" element={<Contacto/>}/>
        

        </Route>
      </Routes>


 </div>
  );
}

export default App;
