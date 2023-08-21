import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import PaginaCadastro from 'Pages/PaginaCadastro/index';
import PaginaLogin from 'Pages/PaginaLogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='content'>
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <PaginaCadastro/>
    </SimpleBar>
    </div>
  </React.StrictMode>
);