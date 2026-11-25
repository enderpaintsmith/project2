import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';
import './App.css';

// Main App component
// We combine individual components to create the complete webpage
export default function App() {
  return (
    <>
    {/* Main Nav */}
    <Header />

    {/* Main content of the app */}
    <main>
      {/* Intro section */}
      <Hero />
      {/* URL shortening form, saved links and feature cards*/}
      <Statistics />

      {/* Call-to-action section */}
      <Boost />
    </main>

    {/* Footer Section */}
    <Footer />
    </>
  );
}