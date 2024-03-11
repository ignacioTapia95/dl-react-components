import { useState } from "react";
import Alert from "./Alert.jsx";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValitation, setPasswordValidation] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmptyForm, setErrorEmptyForm] = useState(null);

    const validarEmail = (e) => {
        e.preventDefault();

        //validar formato de email
        const emailExpression = /\w+@\w+\.[a-z]/;
        if (!emailExpression.test(email)) {
            setErrorEmail(true);
            return;
        }
        setErrorEmail(false);
    }

    const validarPassword = (e) => {
        e.preventDefault();

        //validar que las contraseñas coincidan
        if (password !== passwordValitation) {
            setErrorPassword(true);
            return;
        }
        setErrorPassword(false);
    }

    // validar campos vacios
    const validarCamposVacios = () => {
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || passwordValitation.trim() === '') {
            setErrorEmptyForm(true);
            return;
        }
        setErrorEmptyForm(false);
    }
    



    const validarFormulario = (e) => {
        e.preventDefault();
        validarEmail(e);
        validarPassword(e);
        if (!errorEmail || !errorPassword) {
            validarCamposVacios(e);
        }
    }

    return (
        <>
            <form className='formulario' onSubmit={validarFormulario}>
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="tuemail@ejemplo.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                {errorEmail ? <Alert message={"El email no cumple formato requerido"} success={!errorEmail}/> : null}

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Confirma tu contraseña"
                        onChange={(e) => setPasswordValidation(e.target.value)}
                    />
                </div>
                {errorPassword ? <Alert message={"Las contraseñas no coinciden"} success={!errorPassword}/> : null}
                
                <button className="btn btn-success" type="submit">Registrarse</button>
                
                {errorEmptyForm  ? <Alert message={"Todos los campos son obligatorios"} success={!errorEmptyForm}/> : null}

                {errorEmptyForm!==null && !errorEmptyForm && !errorEmail && !errorPassword ? <Alert message={"Formulario validado correctamente"} success={!errorEmptyForm}/> : null}

            </form>
        </>
    );
};

//exportar Formulario y ErrorEmptyForm
export default Formulario;