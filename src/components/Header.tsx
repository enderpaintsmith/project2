import { useState } from "react";

// Header component renders the main navigation
export default function Header() {

    // Store the state of the mobile nav menu
    // Menu is closed by default (false)
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle navigation menu between open and closed
    // Use the previous state and return its opposite
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Main navigation">

                {/* Logo links back to the top of the page */}
                <a href="#" className="logo">
                    <img src="/images/logo.svg" alt="Shortly" />
                </a>

                {/* Mobile navigation toggle button */}
                {/* aria-expanded gives the current menu state */}
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

                {/* Ternary operator adds the active class if menuOpen is true */}
                <div
                    className={`nav-links ${menuOpen ? 'active' : ''}`}
                    id="nav-links"
                >

                    {/* Navigation links to sections of the page */}
                    <div className="nav-left">
                        <a href="#features">Features</a>
                        <a href="#shortener">Pricing</a>
                        <a href="#footer">Resources</a>
                    </div>

                    {/* Login and sign-up navigation links */}
                    <div className="nav-right">
                        <a href="#shortener">Login</a>
                        <a href="#shortener" className="btn">Sign Up</a>
                    </div>

                </div>
            </nav>
        </header>
    );
}