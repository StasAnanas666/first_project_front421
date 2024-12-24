import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                    HOME
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                    BLOG
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                    ABOUT US
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                    CONTACTS
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;
