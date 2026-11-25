import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LinkProvider } from './context/LinkContext.tsx'
import './index.css'
import App from './App.tsx'


// Find the root HTML element where React will render the App
// The ! operator tells Typescript this element should exist
createRoot(document.getElementById('root')!).render(

  // StrictMode helps identify potential problems in dev
  <StrictMode>

    {/* wrap App in LinkProvider to allow components access 
    shortened links and addLink function*/}
    <LinkProvider>
      <App />
    </LinkProvider>

  </StrictMode>,

);
