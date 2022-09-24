import Swal from 'sweetalert2'
import { setLoading, removeLoading } from "../uiRedux";
import { publicRequest } from '../../requestMethods';
import { loginSuccess, logOutStart } from '../userRedux';

export const login = (values: any) => {
  return (dispatch) => {
    const tryLogin = async () => {
      try {
        dispatch(setLoading());
        const user = await publicRequest.post("/auth/login", values);
        const { data } = user;
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("id", data._id);
        dispatch(loginSuccess(data));
        dispatch(removeLoading());
      } catch (error) {
        Swal.fire('Error', "No ha sido posible iniciar sesión", "error");
        dispatch(removeLoading());
      }
    }
    tryLogin();
  }
}

export const signup = (values: any) => {
  return (dispatch) => {
    const trySignup = async () => {
      try {
        dispatch(setLoading());
        await publicRequest.post("/auth/signup", values);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tu cuenta ha sido creada correctamente",
        });
        dispatch(removeLoading());
      } catch (error) {
        Swal.fire('Error', "No ha sido posible registrarse", "error");
        dispatch(removeLoading());
      }
    }
    trySignup();
  }
}


export const logout = () => {
  return (dispatch) => {
    dispatch(logOutStart());
  }
}