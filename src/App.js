import React from 'react';
import ProductList from './component/products/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/header';
import ProductContextProvider from './component/store/ProductContextProvider';
import './App.css';

const App = () => {
  return (
    <ProductContextProvider>
      <Header />
      <ProductList />
    </ProductContextProvider>
  );
};

export default App;
