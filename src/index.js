import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import PaginaPrincipal from 'Pages/PaginaPrincipal';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='content'>
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <App/>
    </SimpleBar>
    </div>
  </React.StrictMode>
);
