import { useState } from 'react';
import type { FormEvent } from 'react';
import { useShortenUrl } from '../hooks/useShortenUrl';

// Component for URL shortening form
export default function ShortenForm() {

    // Store the URL entered by the user
    // The input is initially an empty string
    const [url, setUrl] = useState('');

    // Access functions and state from our custom hook
    const { shortenUrl, loading, error, setError } = useShortenUrl();

    // Handle form submit
    // FormEvent is the TypeScript type for a form event
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        // Prevent the browser from refreshing
        event.preventDefault();

        // Pass user's URL into our custom hook
        // Wait for the API request to finish
        await shortenUrl(url);
    };

    return (
        <div className="shortener" id="shortener">

            {/* Run handleSubmit when the form is submitted */}
            {/* noValidate disables default browser validation */}
            <form id="shorten-form" onSubmit={handleSubmit} noValidate>

                <div className="input-group">

                    {/* Accessible label for screen readers */}
                    {/* htmlFor connects the label to the input ID */}
                    <label htmlFor="url-input" className="sr-only">
                        Enter a URL to shorten
                    </label>

                    {/* Controlled input: React manages its value */}
                    {/* aria-invalid tells screen readers if an error exists */}
                    {/* !! converts the error string into a boolean */}
                    {/* aria-describedby connects the input to its error message */}
                    <input
                        type="url"
                        id="url-input"
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(event) => {

                            // Update the state with the current input value
                            setUrl(event.target.value);

                            // Clear previous errors as the user types
                            setError('');
                        }}
                        aria-invalid={!!error}
                        aria-describedby="error-message"
                        required
                    />

                    {/* Display error messages from our custom hook */}
                    {/* aria-live allows screen readers to announce new errors */}
                    {/* polite waits until the screen reader finishes speaking */}
                    <p
                        className="error-message"
                        id="error-message"
                        aria-live="polite"
                    >
                        {error}
                    </p>

                </div>

                {/* Disable the button while the request is in progress */}
                <button
                    type="submit"
                    className="btn"
                    disabled={loading}
                >
                    {/* Change button text depending on loading state */}
                    {loading ? 'Shortening...' : 'Shorten It!'}
                </button>

            </form>
        </div>
    );
}