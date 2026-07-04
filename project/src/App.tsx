import Nav from './components/Nav';
import Hero from './components/Hero';
import Domains from './components/Domains';
import HowItWorks from './components/HowItWorks';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Paths from './components/Paths';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Domains />
        <HowItWorks />
        <Courses />
        <Paths />
        <Mentors />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
