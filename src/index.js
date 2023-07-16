import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cabecalho from 'Components/PaginaPrincipal/Cabecalho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho/>
  </React.StrictMode>
);