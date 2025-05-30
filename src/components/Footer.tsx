
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About HatuaSasa', action: () => scrollToSection('about') },
    { name: 'Programs', action: () => scrollToSection('programs') },
    { name: 'Impact', action: () => scrollToSection('impact') },
    { name: 'Resources', action: () => console.log('Resources clicked') },
    { name: 'Events', action: () => console.log('Events clicked') },
    { name: 'Careers', action: () => console.log('Careers clicked') }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/c066f274-ac00-4e87-9092-f28a07cc80be.png" 
                alt="HatuaSasa Network Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-hatua-yellow">HatuaSasa</h3>
                <p className="text-hatua-blue font-medium">NETWORK</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Building a just, equitable, and sustainable society through climate action, 
              good governance, and civic empowerment in Kenya and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-hatua-yellow transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-hatua-yellow transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-hatua-yellow transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-hatua-yellow transition-colors">💼</a>
              <a href="#" className="text-2xl hover:text-hatua-yellow transition-colors">📺</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-hatua-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-hatua-yellow">Get in Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start space-x-2">
                <span>📍</span>
                <span>Nairobi, Kenya</span>
              </p>
              <p className="flex items-start space-x-2">
                <span>📞</span>
                <span>+254 xxx xxx xxx</span>
              </p>
              <p className="flex items-start space-x-2">
                <span>📧</span>
                <span>info@hatuasasa.org</span>
              </p>
              <p className="flex items-start space-x-2">
                <span>🌐</span>
                <span>www.hatuasasa.org</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 HatuaSasa Network. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
