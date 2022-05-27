import { NavLink as Link } from "react-router-dom";

const Sidebar = () => {
    const user = () => {
        window.location.href = '/createUser';
    }

    const cita = () => {
        window.location.href = '/createCitas';
    }

    const tabla = () => {
        window.location.href = '/viewUser';
    }

    return (
        <div className='sideArea'>
            <div className="dropup">
                <div className="sidebarElem">
                    <h3>
                        Usuarios
                    </h3>
                    <div className="dropup-content">
                        <h4 onClick={cita}>Crear una cita</h4>
                        <h4 onClick={user}>Registrar una cuenta</h4>
                        <h4 onClick={tabla}>Ver cuentas</h4>
                    </div>
                </div>
            </div>
            <div className="sidebarElem">
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