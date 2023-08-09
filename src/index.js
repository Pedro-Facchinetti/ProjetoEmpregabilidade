import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PaginaPrincipal from 'Pages/PaginaPrincipalTeste/index';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <PaginaPrincipal/>
    </SimpleBar>
  </React.StrictMode>
);