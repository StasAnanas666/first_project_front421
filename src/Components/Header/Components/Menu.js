function Menu() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                    HOME
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">
                    BLOG
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">
                    ABOUT US
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-light" href="#">
                    CONTACTS
                </a>
            </li>
        </ul>
    );
}

export default Menu;
