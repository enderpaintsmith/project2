// Component for the call-to-action section
export default function Boost() {

    return (
        <section className="boost">
            {/* Display the call-to-action heading */}
            <h2>Boost your links today</h2>
            {/* Navigate the user back to the URL shortening form */}
            {/* this link targets the element with the ID "shortener" */}
            <a href="#shortener" className="btn">
                Get Started
            </a>
        </section>
    );
}