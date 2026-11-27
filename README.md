# Frontend Mentor - Shortly URL Shortening API Challenge

## Overview

For my second cumulative project we rebuilt my original Shortly URL Shortening application from project 1 using React and TypeScript.

Having previously rebuilt the application using HTML, CSS, and JavaScript, I wanted to retain the original design and functionality while applying the React concepts I had been learning throughout the course, particularly component composition, state management, side effects, custom hooks, and the Context API.

## Links

- [Live Website](https://proj-2-eta.vercel.app)
- [GitHub Repository](https://github.com/enderpaintsmith/project2)
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G)

## The Challenge

Users should be able to:

- Shorten valid URLs using the Bitly API.
- View previously shortened links and retain them after refreshing the page.
- Copy shortened links to their clipboard and receive visual feedback.
- Receive error messages when submitting an empty or invalid URL.
- View the appropriate layout depending on their device's screen size.
- Interact with responsive navigation and hover states.

## Built With

- React and TypeScript
- JavaScript
- Semantic HTML5
- CSS custom properties, Flexbox, and CSS Grid
- Vite
- Bitly API
- Vercel serverless functions
- Git and GitHub

## Development Process

### Component Architecture

I retained the CSS, images, design assets, and serverless API function from my Project 1 rebuild. Rather than starting from scratch, I focused on replacing direct DOM manipulation with React components, state, and event handlers.

I began with the static components before moving into the interactive functionality. TypeScript interfaces were used to define the structure of shortened links and component props. Reusable components such as `FeatureCard` and `LinkItem` helped reduce repetitive code.

### State Management and Side Effects

I used `useState` to manage the URL input, loading and error states, shortened links, mobile navigation, and clipboard feedback.

Building upon concepts from the React Counter lab, I used `useEffect` to save shortened links to localStorage and manage the clipboard feedback timer. This involved working with dependency arrays, initial state, and cleanup functions.

The URL input is managed as a controlled form element, and shortened links are rendered dynamically based on changes in state.

### Custom Hooks and Context

Building upon the custom hooks and Context API exercises from Module 10, I created two custom hooks:

- `useSavedLinks` — manages shortened links and localStorage persistence.
- `useShortenUrl` — handles API requests, loading states, errors, and the addition of new links.

I also implemented `LinkContext`, `LinkProvider`, and `useLinks` to share state between components without unnecessary prop drilling.

New links are added using a functional state update and the spread operator rather than directly modifying the existing array.

### API Integration and Deployment

The application retains the serverless API function from my Project 1 rebuild. When the user submits a URL, an asynchronous POST request is sent to the serverless endpoint, which validates the URL and communicates with Bitly.

This allowed me to revisit asynchronous functions, HTTP requests and responses, JSON serialization, headers, URL validation, and error handling using `try`, `catch`, and `finally`.

The API request is triggered by form submission rather than `useEffect` because it is a direct response to user interaction.

The application was deployed through Vercel, with the Bitly access token stored as a server-side environment variable to prevent exposing private API credentials.

## Running Locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/enderpaintsmith/project2.git
cd project2
npm install
```

Create a `.env.local` file containing your own Bitly access token:

```text
BITLY_ACCESS_TOKEN=your_token_here
```

Keep this file out of version control.

Start the development server:

```bash
npx vercel dev
```

Open `http://localhost:3000`.

Vercel is used for local development because the application requires both the React frontend and the serverless API function. Initial Vercel project configuration may be required.

To verify the production build:

```bash
npm run build
```

## Project Reflection

For this project, the challenge was to take a previously built, fully functional webpage and translate it into React. Having previously rebuilt the original URL shortening project in JavaScript, I found that working with familiar code would gave me a better frame of reference for understanding React--and the website functionality when re-written.

One of the biggest differences was moving away from directly manipulating the DOM and instead understanding how React renders components based on changes in state. Breaking the application into individual components also helped me better understand how data is passed, accessed, and updated throughout a react application.

I was able to incorporate concepts from Labs 10.1–10.4, including state management, side effects, cleanup functions, custom hooks, and the Context API. Applying these concepts within a larger application helped me understand how they relate to one another on a larger scale.

Throughout this rebuild, I approached the code one component and function at a time. I included comments to reinforce my understanding of the syntax, what each section of code was responsible for, and the order in which operations occurred. I wanted to be certian of why I was implementing something rather than simply getting it to work.

The API integration and Vercel configuration presented some challenges, particularly when establishing communication between the frontend and serverless function and configuring the environment variables for the new project.

Overall, I still have a lot to learn when it comes to implementing these concepts. However, rebuilding a familiar application helped me establish a more solid understanding of React/TypeScript application architecture, and how the concepts we have been learning throughout the course work together.

## Resources

Frontend Mentor for the original design challenge,
React documentation, MDN Reference, previous projects, and Per Scholas for the curriculum, labs, and learning resources that contributed to the development of this project.

### Project Configuration and Tooling

- [npm package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)
- [npm Scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts)
- [Semantic Versioning](https://semver.org/)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [React Documentation](https://react.dev/)
- [React DOM](https://react.dev/reference/react-dom)
- [Vite Documentation](https://vite.dev/guide/)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Oxlint Documentation](https://oxc.rs/docs/guide/usage/linter.html)