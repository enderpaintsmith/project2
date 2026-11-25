import { useState } from 'react';
import { useLinks } from '../context/LinkContext';

// Custom hook for shortening URLs
export function useShortenUrl() {

    // Track whether an API request is in progress
    // false means no request is currently in progress
    const [loading, setLoading] = useState(false);

    // Store error messages as a string
    const [error, setError] = useState('');

    // Access the addLink function from our context
    const { addLink } = useLinks();

    // Async function that receives the URL from user input
    const shortenUrl = async (url: string) => {

        // Clear any previous error messages
        setError('');

        // Check whether the user entered a URL
        // trim() removes whitespace from both ends of input
        if (!url.trim()) {
            setError('Please add a link');
            return;
        }

        // Set loading to true before starting the API request
        // Updating state causes React to re-render the component
        setLoading(true);

        try {

            // Send a POST request to our server-side API
            const response = await fetch('/api/shorten', {
                method: 'POST',

                // Tell the server that we are sending JSON
                headers: {
                    'Content-Type': 'application/json'
                },

                // Convert the request body object into a JSON string
                // long_url matches the property expected by the API
                body: JSON.stringify({
                    long_url: url.trim()
                })
            });

            // Convert the JSON response into a JS object
            const data = await response.json();

            // Check whether the request failed
            if (!response.ok) {
                throw new Error(data.error || 'Unable to shorten URL');
            }

            // Create a new shortened link object
            // Date.now() generates a timestamp in milliseconds
            // toString() converts the timestamp into a string
            // Match the properties in our ShortenedLink interface
            addLink({
                id: Date.now().toString(),
                originalUrl: data.originalUrl,
                shortUrl: data.shortenedUrl
            });

        } catch (error) {

            // Check whether the error is an Error object
            // If so, use its message
            // Otherwise, display a default error message
            setError(
                error instanceof Error
                    ? error.message
                    : 'Something went wrong'
            );

        } finally {

            // Stop loading whether the request succeeds or fails
            setLoading(false);
        }
    };

    // Return the function and state for other components
    return { shortenUrl, loading, error, setError };
}