
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DonationModal from './DonationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigateToEvents = () => {
    navigate('/events');
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={navigateHome} className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c066f274-ac00-4e87-9092-f28a07cc80be.png" 
              alt="HatuaSasa Network Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-hatua-green">HatuaSasa</h1>
              <p className="text-sm text-hatua-blue font-medium">NETWORK</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              Team
            </button>
            <button 
              onClick={navigateToEvents}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="text-gray-700 hover:text-hatua-green transition-colors"
            >
              Get Involved
            </button>
            <DonationModal>
              <Button className="bg-hatua-yellow hover:bg-hatua-yellow/90 text-black">
                Donate
              </Button>
            </DonationModal>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('impact')}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                Team
              </button>
              <button 
                onClick={navigateToEvents}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('get-involved')}
                className="text-left text-gray-700 hover:text-hatua-green transition-colors"
              >
                Get Involved
              </button>
              <DonationModal>
                <Button className="bg-hatua-yellow hover:bg-hatua-yellow/90 text-black w-fit">
                  Donate
                </Button>
              </DonationModal>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
