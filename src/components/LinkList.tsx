import { useLinks } from '../context/LinkContext';
import LinkItem from './LinkItem';

// Component for displaying all saved short links
export default function LinkList() {

    //Retrieve the array of saved links from our context
    const { links } = useLinks();

    return (
        <div id="results" className="results" aria-live="polite">

            {/* map() loops through the array of saved links */}
            {/*  Create a LinkItem component for each link */}
            {/* key helps react identify each individual component */}
            {/* Pass the link object into LinkItem as a prop */}
            {links.map((link) => (
                <LinkItem key={link.id} link={link} />
            ))}

        </div>

    );
}
