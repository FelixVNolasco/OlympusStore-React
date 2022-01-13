import {
    Routes,
    Route,
    // Redirect
} from "react-router-dom";
import { Login } from '../components/Auth/Login';
import { Signup } from '../components/Auth/Signup';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                {/* <Redirect to="/auth/login" /> */}
            </Routes>
            </div>
        </div>
    )
}