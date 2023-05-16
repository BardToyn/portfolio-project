import {NavLink} from "react-router-dom"

import "./style.css";

function Header () {
    return (
        <header className="header">
            <NavLink to="/" className="link">
                <div className="logo-wrapper">
                    <p className="logo-icon">
                        UX
                    </p>
                    <p className="logo-text">BardToyn</p>
                    <span className="logo-circul"></span>
                    <p className="logo-text">Portfolio</p>
                </div>
            </NavLink>
            <nav className="header-nav">
                <NavLink to="/" className="header-link">
                    <span className="link-num">01.</span>
                    Главная
                </NavLink>
                <NavLink to="/about" className="header-link">
                    <span className="link-num">02.</span>
                    Обо мне
                </NavLink>
                <NavLink to="/work" className="header-link">
                    <span className="link-num">03.</span>
                    Проекты
                </NavLink>
                <NavLink to="/contact" className="header-link">
                    <span className="link-num">04.</span>
                    Контакты
                </NavLink>
            </nav>
            <button className="burger-btn">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
        </header>
    );
}
 
export default Header;