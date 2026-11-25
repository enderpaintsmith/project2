import { useState, useEffect } from 'react';
import type { ShortenedLink } from '../types';

// Define the type of props passed into this component
interface LinkItemProps {
    link: ShortenedLink;
}

// Component for displaying an individual shortened link
// Destructure the link object from the props
export default function LinkItem({ link }: LinkItemProps) {

    // Track whether the user has copied the link with useState
    // false means the link has not been copied
    const [copied, setCopied] = useState(false);

    // Function that copies the shortened URL
    const handleCopy = async () => {

        // Copy the shortened URL to user's clipboard
        await navigator.clipboard.writeText(link.shortUrl);

        // Update the state to indicate the link was copied
        setCopied(true);
    };

    // Run this effect whenever 'copied' changes
    useEffect(() => {

        // If copied is false, exit the effect
        // This prevents the timer from starting unnecessarily
        if (!copied) {
            return;
        }

        // Wait two seconds before resetting copied to false
        // 2000 represents milliseconds
        // Store the timer so we can cancel it later
        const timer = setTimeout(() => {
            setCopied(false);
        }, 2000);

        // Cleanup function removes the timer
        // Runs when the component unmounts or 'copied' changes
        return () => clearTimeout(timer);

    }, [copied]);

    return (
        <article className="result-item">

            {/* Display the original URL from the link object */}
            <p className="original-url">
                {link.originalUrl}
            </p>

            {/* Display the shortened URL and copy button */}
            <div className="result-actions">

                {/* target="_blank" opens the URL in a new tab */}
                {/* rel provides security and privacy protection */}
                <a
                    className="short-url"
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.shortUrl}
                </a>

                {/* Run handleCopy when the button is clicked */}
                {/* Add the copied class when copied is true */}
                <button
                    type="button"
                    className={`btn copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                >
                    {/* Change button text depending on copied state */}
                    {copied ? 'Copied!' : 'Copy'}
                </button>

            </div>

        </article>
    );
}