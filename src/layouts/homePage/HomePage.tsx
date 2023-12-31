import Home from '@/pages/home/home';
import { HomePageProps } from './homePage.types';
import Header from '@/components/header/header';
import AboutSection from '@/pages/about/about';
import Footer from '@/components/footer/footer';
import ContactSection from '@/pages/contact/contact';
import ScrollTop from '@/components/scrollTop/scrollTop';
import ExperienceSection from '@/pages/experience/experience';
const HomePage = ({ homepages }: HomePageProps) => {
  return (
    <>
      <Header />
      <Home />
      <AboutSection />
      <ExperienceSection />
      {/* <PortfolioSection data={projects} /> */}
      <ContactSection />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default HomePage;
