// Component for displaying the website footer
export default function Footer() {

    return (
        <footer className="site-footer" id="footer">

            <div className="footer-content">

                {/* Display the logo and link back to the top of the page */}
                {/* href="#" navigates to the top of the page */}
                <a href="#" className="footer-logo">
                    <img src="/images/logo.svg" alt="Shortly" />
                </a>

                {/* Container for the footer nav links */}
                <div className="footer-links">

                    {/* Features section */}
                    <div>
                        <h3>Features</h3>
                        <a href="#shortener">Link Shortening</a>
                        <a href="#features">Branded Links</a>
                        <a href="#features">Analytics</a>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3>Resources</h3>
                        <a href="#footer">Blog</a>
                        <a href="#footer">Developers</a>
                        <a href="#footer">Support</a>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3>Company</h3>
                        <a href="#footer">About</a>
                        <a href="#footer">Our Team</a>
                        <a href="#footer">Careers</a>
                        <a href="#footer">Contact</a>
                    </div>
                </div>

                {/* Display social media links and icons */}
                {/* aria-label provides accessible names for 
                links that are just icons */}
                <div className="social-links">

                    <a href="https://facebook.com" aria-label="Facebook">
                        <img src="/images/icon-facebook.svg" alt="" />
                    </a>

                    <a href="https://x.com" aria-label="X">
                        <img src="/images/icon-twitter.svg" alt="" />
                    </a>

                    <a href="https://pinterest.com" aria-label="Pinterest">
                        <img src="/images/icon-pinterest.svg" alt="" />
                    </a>

                    <a href="https://instagram.com" aria-label="Instagram">
                        <img src="/images/icon-instagram.svg" alt="" />
                    </a>

                </div>

            </div>

        </footer>
    );
}