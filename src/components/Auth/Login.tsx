import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaHome } from "react-icons/fa";
import { useForm } from '../../hooks/useForm';
import { login } from "../../redux/apiCall";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { removeError, setError } from '../../redux/uiRedux';
import { loginWithEmailPassword, startGoogleLogin } from '../../redux/actions/auth';



const Login = () => {

    const dispatch = useDispatch();

    const [showPassword, setshowPassword] = useState(false);
    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const navigate = useNavigate();

    // const [formValues, handleInputChange] = useForm({
    //     username: 'felixvnolasco',
    //     password: 'memento89'
    // });

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;
    const { isFetching } = useSelector((state: RootStateOrAny) => state.user);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (isFormValid) {
            // login(dispatch, { username, password });
            dispatch(loginWithEmailPassword(email, password));
            navigate("/");
        };
    };

    const isFormValid = () => {
        if (email.trim().length === 0) {
            dispatch(setError('Username is Required!'));
            return false;
        } else if (password.length < 5) {
            dispatch(setError('Wrong Password'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handleGoogleLoginSubmit = (e: any) => {
        e.preventDefault();
        dispatch(startGoogleLogin());
        navigate("/");
    }

    return (
        <>
            <div className='form-wrapper'>
                <div className='form-container'>
                    <div className="auth__box-container animate__animated animate__fadeIn">
                        <p className="auth__title">Iniciar Sesión</p>
                        <form onSubmit={handleSubmit}>
                            <p className='label'>Correo Electrónico</p>
                            <div className='input-container'>
                                <input className="auth__input" type="text" placeholder="correo@corre.com" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                            </div>
                            <p className='label'>Contraseña</p>
                            <div className='input-container'>
                                <input className="auth__input" type={showPassword ? "text" : "password"} name="password" value={password} onChange={handleInputChange} />
                                <FaEye className='showHide-icon' onClick={handleShowPassword} />
                            </div>

                            <div className='btn-container'>
                                <button className="btn btn-primary" type="submit" disabled={isFetching}>Iniciar Sesion</button>
                            </div>
                            {/* {error && (
                                <p>{}</p>
                            )
                            } */}
                        </form>

                        <div className='optionContainer'>
                            <p>O también puedes iniciar sesión con:</p>
                        </div>
                        <div className="auth_social-networks">
                            <div className="google-btn" onClick={handleGoogleLoginSubmit}>
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                            </div>
                            <div className='newAccount-container'>
                                <div className="account_title">Aún no tienes una cuenta?</div>
                                <Link className="create_account" to="/auth/signup">Crea una cuenta.</Link>
                            </div>
                        </div>
                        <Link to={"/"}>
                            <div className="goHome">
                                <FaHome className='iconHome' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;