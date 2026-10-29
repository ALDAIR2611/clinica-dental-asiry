
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <WhatsAppButton />
    </>
  );
}
