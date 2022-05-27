import { NavLink as Link } from "react-router-dom";




const Sidebar = ({ text, onClick }) => {
    const user = () => {
        window.location.href = '/createUser';
    }

    return (
        <div className='sideArea'>
            <div className="dropup">
                <div className='sidebar'>
                    <h3>
                        Usuarios
                    </h3>
                    <div className="dropup-content">
                        <h4>Crear una cita</h4>
                        <h4 onClick={user}>Registrar una cuenta</h4>
                        <h4>Ver cuentas</h4>
                        <h4>Ver Referidos</h4>
                    </div>
                </div>
            </div>
            <div className='sidebar' onClick={user}>
                <h3>
                    Pagos
                </h3>
            </div>
        </div>

    )
}

Sidebar.defaultProps = {
    title: "Buenas"
}

export default Sidebar