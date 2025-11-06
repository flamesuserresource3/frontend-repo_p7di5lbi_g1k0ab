import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Partners from './components/Partners';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main>
        <Hero onOpenAuth={() => setAuthOpen(true)} />
        <Sections onOpenAuth={() => setAuthOpen(true)} />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
