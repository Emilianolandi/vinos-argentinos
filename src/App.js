 import { Routes, Route} from 'react-router-dom';
import './App.css';

import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';

import Contacto from './paginas/Contacto';
import Layout from './paginas/Layout';





function App() {

    return (
      <div className="App">
      <Routes>
        
          <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="Productos" element={<Productos />} />

          
          <Route path="contacto" element={<Contacto/>}/>
        

        </Route>
      </Routes>


 </div>
  );
}

export default App;
