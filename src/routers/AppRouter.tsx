import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { Home } from '../pages/Home';

export const AppRouter = () => {
    const IsLoggedIn: boolean = false;
    return (
        <Router>
            <>
                <Routes>
                    {
                        IsLoggedIn ?
                            (
                                <>
                                    <Route path="/" element={<Home />} />
                                </>
                            )
                            :
                            (
                                <>
                                    <Route path="/auth" element={<AuthRouter />} />
                                    <Navigate to="/auth/login" />
                                </>
                            )
                    }
                </Routes>
            </>
        </Router>
    )
}