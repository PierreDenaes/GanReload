import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import VideosSection from '@/components/VideosSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

export default function Home() {
  console.log("Home page rendered");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <WhyChooseUsSection />
        <VideosSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
