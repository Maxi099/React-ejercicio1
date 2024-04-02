import {
  HashRouter,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { Home } from '../pages/home/home';
import { Nosotros } from '../pages/nosotros/nosotros';
import { Contacto } from '../pages/contacto/contacto';
import { Productos } from '../pages/productos/productos';
 
  
  export const ContainerRoutes = () => {

    return (
      <HashRouter>
         <Layout>
            <Routes>
              <Route path='/' element={<Home />} />  
              <Route path='nosotros' element={<Nosotros />} />  
              <Route path='contacto' element={<Contacto />} />  
              <Route path='productos' element={<Productos/>} />                
              <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
          </Layout>       
      </HashRouter>
    );
  };
  
 