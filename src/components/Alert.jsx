const Alert = ({message, success}) => {

    if (success) {
        return (
            <div className="alert alert-success" role="alert">
            {message}
            </div>
        )

    } else {
        return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
        )
    }

}

export default Alert;