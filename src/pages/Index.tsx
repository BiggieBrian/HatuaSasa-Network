
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Team from '@/components/Team';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Team />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
