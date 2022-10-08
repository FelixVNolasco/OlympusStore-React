import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Purchases } from "./pages/Purchases";
import { RestorePassword } from "./pages/RestorePassword";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { NavbarComponent } from "./components/Shared/Navbar/NavbarComponent";
import { UpdateProfile } from "./pages/UpdateProfile";
import {RootStateOrAny, useSelector} from "react-redux";
import {ProtectedRoute, ProtectedRouteProps} from "./components/ProtectedRoute";
import {NotFound} from "./pages/NotFound";
import { Cancel } from "./pages/Cancel";

//Pages
const ProductList = React.lazy(() => import('./pages/ProductList'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Success = React.lazy(() => import('./pages/Success'));
const Profile = React.lazy(() => import('./pages/Profile'));

const App = () => {

  const user = useSelector((state: RootStateOrAny) => state.user.currentUser);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: user,
    authenticationPath: '/auth/login',
  };

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={
          <Login />
        } />
        <Route path="/auth/signup" element={
          <Signup />
        } />
        <Route path="/restore-password" element={
          <React.Suspense fallback={<></>}>
            <RestorePassword />
          </React.Suspense>
        } />
        <Route path="/products/:category" element={
          <React.Suspense fallback={<></>}>
            <ProductList />
          </React.Suspense>
        } />
        <Route path="/product/:id" element={
          <React.Suspense fallback={<></>}>
            <SingleProduct />
          </React.Suspense>
        } />
        <Route path="/profile" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Profile />} />
          </React.Suspense>
        } />
        <Route path="/profile/updateProfile/:id" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<UpdateProfile />} />
          </React.Suspense>
        } />
        <Route path="/cart" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Cart />} />
          </React.Suspense>
        } />
        <Route path="/purchases" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Purchases />} />
          </React.Suspense>
        } />
        <Route path="/success" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Success />} />
          </React.Suspense>
        } />
        <Route path="/cancel" element={
          <React.Suspense fallback={<></>}>
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Cancel />} />
          </React.Suspense>
        } />
        <Route path="*" element={
          <React.Suspense fallback={<></>}>
              <NotFound />
          </React.Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
