import { NavLink as Link } from "react-router-dom";

const Sidebar = ({ text, onClick }) => {
    return(
        <div className='sideArea'>
            <div className='sidebar' onClick={onClick}>
                <Link to="/register">
                    IDK
                </Link>
            </div>
            <div className='sidebar' onClick={onClick}>
                <Link to="/landing">
                    IDK
                </Link>
            </div>
            <div className='sidebar' onClick={onClick}>
                <Link to="/login">
                    IDK
                </Link>
            </div>
            <div className='sidebar' onClick={onClick}>
                <Link to="/createUser">
                    Crear
                </Link>
            </div>
        </div>
        
    )
}

Sidebar.defaultProps = {
    title: "Buenas"
}

export default Sidebar