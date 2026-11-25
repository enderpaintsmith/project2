import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ShortenedLink } from '../types';
import { useSavedLinks } from '../hooks/useSavedLinks.ts';

// Define what data and functions the context will provide
interface LinkContextType {

    // An array containing shortened link objects
    links: ShortenedLink[];

    // A function that takes a ShortenedLink object
    // void means the function will not return a value
    addLink: (link: ShortenedLink) => void;
}

// Define the type of the children prop
// ReactNode represents content that React can render
interface LinkProviderProps {
    children: ReactNode;
}

// Create the context
// The | means the value can be either LinkContextType or undefined
// undefined is the default value before a provider supplies one
const LinkContext = createContext<LinkContextType | undefined>(undefined);

// Create the provider component
// children represents the components nested inside LinkProvider
export function LinkProvider({ children }: LinkProviderProps) {

    // Access links and setLinks using our custom hook
    // links contains the saved links
    // setLinks is the function used to update the links
    const { links, setLinks } = useSavedLinks();

    // Add a new shortened link
    // The link parameter must follow the ShortenedLink interface
    const addLink = (link: ShortenedLink) => {

        // prevLinks represents the previous state
        // Create a new array instead of modifying the existing array
        // Place the new link at the beginning of the array
        // Spread operator (...) preserves previously saved links
        setLinks((prevLinks) => [link, ...prevLinks]);
    };

    // Provide links and addLink to child components
    // value contains the data and functions we want to share
    // children renders the components nested inside the provider
    return (
        <LinkContext.Provider value={{ links, addLink }}>
            {children}
        </LinkContext.Provider>
    );
}

// Custom hook used to access LinkContext
export function useLinks() {

    // Retrieve the data and functions provided by LinkContext
    const context = useContext(LinkContext);

    // If context is undefined, no LinkProvider was found
    // Throw an error to help identify the problem
    if (!context) {
        throw new Error('useLinks must be used within LinkProvider');
    }

    // Return the shared links and addLink function
    return context;
}