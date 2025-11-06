import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Modules />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
