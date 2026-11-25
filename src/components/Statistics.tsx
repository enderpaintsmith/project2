import ShortenForm from './ShortenForm';
import LinkList from './LinkList';
import FeatureCard from './FeatureCard';

// Component for the stats and URL shortening section
// Combine smaller components into one larger component
// This is an example of component composition
export default function Statistics() {

    return (
        <section className="statistics" id="features">

            {/* Render the URL shortening form */}
            <ShortenForm />

            {/* Render the list of saved short links */}
            <LinkList />

            {/* Display the section heading and description */}
            <div className="statistics-heading">
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web
                    with our advanced statistics dashboard.
                </p>
            </div>

            {/* Reuse FeatureCard with different props */}
            {/* Each component receives its own icon, title and description */}
            {/* This avoids repeating the same HTML structure for each card */}
            <div className="feature-cards">

                <FeatureCard
                    icon="/images/icon-brand-recognition.svg"
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click.
                    Generic links don't mean anything. Branded links instill
                    confidence in your content."
                />

                <FeatureCard
                    icon="/images/icon-detailed-records.svg"
                    title="Detailed Records"
                    description="Gain insights into who is clicking on your links!
                    Knowing how people engage with your content helps inform better decisions."
                />

                <FeatureCard
                    icon="/images/icon-fully-customizable.svg"
                    title="Fully Customizable"
                    description="Improve your brand awareness and content visibility
                    through customizable links, supercharging audience engagement."
                />

            </div>

        </section>
    );
}