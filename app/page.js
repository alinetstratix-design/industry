import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import StatsCounter from './components/StatsCounter';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductCatalog from './components/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsClients from './components/ProjectsClients';
import QuoteForm from './components/QuoteForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import QuickConnectFloating from './components/QuickConnectFloating';

export default function HomePage() {
  return (
    <main className="landing-page-wrapper">
      <Header />
      <HeroSlider />
      <StatsCounter />
      <AboutSection />
      <ServicesSection />
      <ProductCatalog />
      <WhyChooseUs />
      <ProjectsClients />
      <QuoteForm />
      <LocationMap />
      <Footer />
      <QuickConnectFloating />
    </main>
  );
}
