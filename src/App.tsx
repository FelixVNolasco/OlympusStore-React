import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { ProductList } from './pages/ProductList';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Success } from "./pages/Success";

const App = () => {

  // const isAuthenticated: boolean = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/login" element={<Login />} />
        {/* {
          isAuthenticated ?  <Navigate to={"/"}/> : <Navigate to={"/login"}/>
        } */}
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
