import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { ProductList } from './pages/ProductList';
import { Login } from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import { Success } from "./pages/Success";
// import { RootStateOrAny, useSelector } from 'react-redux';
import { Profile } from "./pages/Profile";
import { Favorites } from "./pages/Favorites";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {

  // const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
  // const navigate: any = useNavigate();
  // {user &&  navigate('/')}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
