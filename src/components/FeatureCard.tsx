// Define props that each feature card receives
// All 3 properties must be strings
interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

// Reusable component for displaying a feature card
// Destructure the 3 properties from props
export default function FeatureCard({
    icon,
    title,
    description
}: FeatureCardProps) {

    return (
        <article className="feature-card">

            {/* Display the icon passed into component */}
            <div className="feature-icon">
                <img src={icon} alt="" />
            </div>

            {/* Display the title and description passed through props */}
            <h3>{title}</h3>
            <p>{description}</p>

        </article>
    );
}