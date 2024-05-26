import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import PaginaPrincipal from 'Pages/PaginaPrincipal';
import PaginaLogin from 'Pages/PaginaLogin'; 
import PaginaCadastro from 'Pages/PaginaCadastro'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
