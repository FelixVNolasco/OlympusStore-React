import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { useForm } from '../../hooks/useForm';
// import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
// import { loginWithEmailPassword, startGoogleLogin } from '../../actions/auth'
import { login } from "../../redux/apiCall";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

export const Login = () => {

    // const dispatch = useDispatch();
    // const { loading } = useSelector(state => state.ui);

    const [showPassword, setshowPassword] = useState(false);

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const [formValues, handleInputChange] = useForm({
        email: 'felixvnolasco@hotmail.com',
        password: 123456
    });

    // const {email, password} = formValues;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state: RootStateOrAny) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };    
    
    return (
        <>
            
            <div className='form-wrapper'>
                <div className='form-container'>
                    <div className="auth__box-container animate__animated animate__fadeIn">
                        <p className="auth__title">Iniciar Sesión</p>
                        <form onSubmit={handleSubmit}>
                            <p className='label'>Usuario</p>
                            <div className='input-container'>
                                <input className="auth__input" type="text" placeholder="ejemploUsuario" name="email" autoComplete="off"  onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <p className='label'>Contraseña</p>
                            <div className='input-container'>
                                <input className="auth__input" type={showPassword ? "text" : "password"} placeholder="" name="password" onChange={(e) => setPassword(e.target.value)} />
                                <FaEye className='showHide-icon' onClick={handleShowPassword} />
                            </div>

                            <div className='btn-container'>
                                <button className="btn btn-primary" type="submit" disabled={isFetching}>Iniciar Sesion</button>
                            </div>
                            {error && <p>Something went wrong...</p>}
                        </form>
                        {/* <div className='optionContainer'>
                            <p>Or you can login with:</p>
                        </div> */}
                        <div className="auth_social-networks">
                            {/* <div className="google-btn" onClick={handleGoogleLoginSubmit}>
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                            </div> */}
                            <div className='newAccount-container'>
                                <div className="account_title">You don't have an account?</div>
                                <Link className="create_account" to="/auth/signup">Create a new one here.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}