import React from 'react'

import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { ProductList } from './pages/ProductList';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
