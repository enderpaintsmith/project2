// Hero component renders the main introductory section
export default function Hero() {
    return (
        <section className="hero">

            {/* Main heading, description, and call to action */}
            <div className="hero-content">
                <h1>More than just shorter links</h1>

                <p>
                    Build your brand's recognition and get detailed
                    insights on how your links are performing.
                </p>

                {/* Navigate to the URL shortener section */}
                <a href="#shortener" className="btn">
                    Get Started
                </a>
            </div>

            {/* Hero illustration pulled from the public images folder */}
            <div className="hero-image">
                <img
                    src="/images/illustration-working.svg"
                    alt="Person working at a desk"
                />
            </div>

        </section>
    );
}