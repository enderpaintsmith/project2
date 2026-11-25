import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

// Main App component
export default function App() {
  return (
    <>
    {/* Main Nav */}
    <Header />

    {/* Main content of the app */}
    <main>
      <Hero />
    </main>
    </>
  );
}