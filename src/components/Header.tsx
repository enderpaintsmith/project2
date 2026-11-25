import { useState } from "react";

export default function Header() {
    // Store the state of the movile nav menu
    const [menuOpen, setMenuOpen] = useState(false);


// Toggle navigation menu openand closed

const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
};

return (
    <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
            <a href="#" className="logo">
                <img src="/images/logo.svg" alt="Shortly" />
            </a>

            <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={toggleMenu}
            >
                {/* Hamburger icon */}
                &#9776;
                </button>
                <div
                className={`nav-links ${menuOpen ? 'active' : ''}`}
                id="nav-links"
                >
                    <div className="nav-left">
                        <a href="#features">Features</a>
                        <a href="#shortener">Pricing</a>
                        <a href="#footer">Resources</a>
                    </div>
                    <div className="nav-right">
                        <a href="#shortener">Login</a>
                        <a href="#shortener" className="btn">Sign Up</a>
                    </div>
                </div>
        </nav>
    </header>
);
}