import Logo from "./Components/Logo";
import Menu from "./Components/Menu";

function Header() {
    return (
        <header className="bg-dark py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <Logo />
                <Menu />
            </div>
        </header>
    );
}

export default Header;
