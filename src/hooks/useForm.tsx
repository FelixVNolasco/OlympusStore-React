import { useState } from 'react';

// interface signupForm  {
//     name: string,
//     email: string,
//     password: string,
//     password2: string
// }

// interface loginForm {
//     username: string,
//     password: string
// }

export const useForm = (initialState: any = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }


    const handleInputChange = ({ target }: { target: any }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}