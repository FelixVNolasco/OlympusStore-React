import * as React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
const Login = React.lazy(() => import('../components/Auth/Login'));
const Signup = React.lazy(() => import('../components/Auth/Signup'));

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path="/auth/login" element={
                        <React.Suspense fallback={<>Loading...</>}>
                            <Login />
                        </React.Suspense>
                    } />
                    <Route path="/auth/signup" element={
                        <React.Suspense fallback={<>Loading...</>}>
                            <Signup />
                        </React.Suspense>
                    } />
                </Routes>
            </div>
        </div>
    )
}