import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { AuthRouter } from './AuthRouter';
import { Home } from '../pages/Home';

// import { getAuth, onAuthStateChanged } from '@firebase/auth';
// import { login } from '../actions/auth';
// import { useDispatch } from 'react-redux';
// import { setLoadingState } from '../actions/notes';
import { Login } from '../components/Auth/Login';

export const AppRouter = () => {

    const IsLoggedIn: boolean = false;
    // const [checking, setChecking] = useState(true);
    // const [IsLoggedIn, setIsLoggedIn] = useState(false);
    // const dispatch = useDispatch();

    // useEffect(() => {        
    //     const auth = getAuth();
    //     onAuthStateChanged(auth, async (user) =>{
    //         if(user?.uid) {
    //             dispatch(login(user.uid, user.displayName));
    //             setIsLoggedIn(true);
    //             dispatch(setLoadingState(user.uid));
    //         } else {
    //             setIsLoggedIn(false);
    //         }
    //         setChecking(false);
    //     })
    // }, [dispatch, setChecking, setIsLoggedIn]);

    // if(checking) {
    //     return (
    //         <div className="auth__main">
    //             <Loader
    //                 type="Puff"
    //                 color="#38939A"
    //                 height={320}
    //                 width={320}
    //                 timeout={3000}
    //             />
    //         </div>
    //     );
    // }

    return (
        <Router>
            <>
                <Routes>
                    {
                        IsLoggedIn ?
                            (
                                <>
                                    <Route path="/" element={<Home />} />
                                    {/* <Redirect to = "/" /> */}
                                </>
                            )
                            :
                            (
                                <>
                                    <Route path="/auth" element={<AuthRouter />} />
                                    {/* <Route path="/auth/login" element={<Login />} /> */}
                                    <Navigate to="/auth/login" />
                                </>
                            )
                    }
                </Routes>
            </>
        </Router>
    )
}