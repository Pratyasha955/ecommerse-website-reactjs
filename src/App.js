import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/products/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/header';
import Footer from './component/layout/Footer';
import About from './component/layout/About';
import Home from './component/layout/Home';
import ProductContextProvider from './component/store/ProductContextProvider';
import './App.css';

const App = () => {
  return (
    <Router>
      <ProductContextProvider>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/store" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </Fragment>
      </ProductContextProvider>
    </Router>
  );
};
export default App;
