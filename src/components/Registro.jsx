import SocialButton from "./SocialButton.jsx";
import Formulario from "./Formulario.jsx";
import Alert from "./Alert.jsx";

const Registro = () => {

    return (
        <>
            <SocialButton
                facebook="../src/assets/img/facebook.png"
                github="../src/assets/img/github.png"
                linkedin="../src/assets/img/linkedin.png"
            />
            <p>O usa tu email para registrarte</p>
            <Formulario />

        </>
    );
};

export default Registro;