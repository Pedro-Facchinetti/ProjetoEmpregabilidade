import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Homealuno from 'Pages/Aluno/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <Homealuno/>
    </SimpleBar>
  </React.StrictMode>
);