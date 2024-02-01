
import React, { useContext } from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate, useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider, AuthContext } from './components/Context/ContextProvider';
import Layout from './components/Layout/Layout';
import ProductList from './components/Products/ProductList';
import About from './components/Layout/About';
import Home from './components/Layout/Home';
import Contact from './components/Layout/Contact';
import ProductDetail from './components/Products/ProductDetail';
import Login from './components/Layout/Login';

const StoreRoute = ({ element }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null; 
  }

  return element;
};
const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/store'
              element={<StoreRoute element={<ProductList />} />}
            />
            <Route path='/store/:id' element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </Router>
  );
};

export default App;