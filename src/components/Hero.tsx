
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-hatua-green via-hatua-blue to-hatua-yellow">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Empowering Citizens.
          <br />
          <span className="text-hatua-yellow">Protecting the Planet.</span>
          <br />
          Strengthening Governance.
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
          At HatuaSasa Network, we work at the intersection of climate action, good governance, 
          and civic empowerment to create meaningful change in Kenya and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-hatua-yellow hover:bg-hatua-yellow/90 text-black font-semibold px-8 py-3 text-lg"
            onClick={() => scrollToSection('programs')}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-hatua-green font-semibold px-8 py-3 text-lg"
            onClick={() => scrollToSection('get-involved')}
          >
            Partner With Us
          </Button>
          <Button 
            size="lg" 
            className="bg-hatua-green hover:bg-hatua-green/90 text-white font-semibold px-8 py-3 text-lg"
          >
            Donate
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
