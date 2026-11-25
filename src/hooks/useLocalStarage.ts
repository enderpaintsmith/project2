import { useState, useEffect } from 'react';
import type { ShortenedLink } from '../types';

// Custom hook for managing/saving shortened links
export function useSavedLinks() {
    // Run the callback function to determine the initial state
    // Check localStorage for saved links when the component initializes

    // "Lazy Initialization"
    const [links, setLinks] = useState<ShortenedLink[]>(() => {

        // Grab saved links from localStorage
        const savedLinks = localStorage.getItem('shortlyLinks');

        // Return saved links or an empty array
        return savedLinks ? JSON.parse(savedLinks) : [];
    });

    // Check for changes to links and update localStorage
    useEffect(() => {
        localStorage.setItem('shortlyLinks', JSON.stringify(links));
    }, [links]);

    // Return saved links
    return { links, setLinks };
}