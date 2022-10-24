import React from 'react'
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { NotFound } from '../pages/NotFound';
import { Cancel } from '../pages/Cancel';
import { UpdateProfile } from '../pages/UpdateProfile';
import { Home } from '../pages/Home';
import { Purchases } from '../pages/Purchases';
import { RestorePassword } from '../pages/RestorePassword';

//Pages
const ProductList = React.lazy(() => import('../pages/ProductList'));
const SingleProduct = React.lazy(() => import('../pages/SingleProduct'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Success = React.lazy(() => import('../pages/Success'));
const Profile = React.lazy(() => import('../pages/Profile'));

export const AnimatedRoutes = ({ routeProtection }) => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
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
                    <ProtectedRoute {...routeProtection} outlet={<Profile />} />
                </React.Suspense>
            } />
            <Route path="/profile/updateProfile/:id" element={
                <React.Suspense fallback={<></>}>
                    <ProtectedRoute {...routeProtection} outlet={<UpdateProfile />} />
                </React.Suspense>
            } />
            <Route path="/cart" element={
                <React.Suspense fallback={<></>}>
                    <ProtectedRoute {...routeProtection} outlet={<Cart />} />
                </React.Suspense>
            } />
            <Route path="/purchases" element={
                <React.Suspense fallback={<></>}>
                    <ProtectedRoute {...routeProtection} outlet={<Purchases />} />
                </React.Suspense>
            } />
            <Route path="/success" element={
                <React.Suspense fallback={<></>}>
                    <ProtectedRoute {...routeProtection} outlet={<Success />} />
                </React.Suspense>
            } />
            <Route path="/cancel" element={
                <React.Suspense fallback={<></>}>
                    <ProtectedRoute {...routeProtection} outlet={<Cancel />} />
                </React.Suspense>
            } />
            <Route path="*" element={
                <React.Suspense fallback={<></>}>
                    <NotFound />
                </React.Suspense>
            } />
        </Routes>
    )
}
