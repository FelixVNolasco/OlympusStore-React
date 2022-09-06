import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { NavbarComponent } from "./components/Shared/Navbar/NavbarComponent";

//Pages
const ProductList = React.lazy(() => import('./pages/ProductList'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Success = React.lazy(() => import('./pages/Success'));
const Profile = React.lazy(() => import('./pages/Profile'));


const App = () => {
  return (

    <NavbarComponent />

    

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products/:category" element={
    //       <React.Suspense fallback={<>Loading...</>}>
    //         <ProductList />
    //       </React.Suspense>
    //     } />
    //     <Route path="/product/:id" element={
    //       <React.Suspense fallback={<>Loading...</>}>
    //         <SingleProduct />
    //       </React.Suspense>
    //     } />
    //     <Route path="/cart" element={
    //       <React.Suspense fallback={<>Loading...</>}>
    //         <Cart />
    //       </React.Suspense>
    //     } />
    //     <Route path="/auth/login" element={
    //         <Login />
    //     } />
    //     <Route path="/auth/signup" element={
    //         <Signup />
    //     } />
    //     <Route path="/success" element={
    //       <React.Suspense fallback={<>Loading...</>}>
    //         <Success />
    //       </React.Suspense>
    //     } />
    //     <Route path="/profile" element={
    //       <React.Suspense fallback={<>Loading...</>}>
    //       <Profile />
    //     </React.Suspense>
    //     } />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
