
import { useEffect, useState } from 'react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('impact-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const CountingNumber = ({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const increment = target / 100;
        const timer = setInterval(() => {
          setCount((prev) => {
            if (prev < target) {
              return Math.min(prev + increment, target);
            }
            clearInterval(timer);
            return target;
          });
        }, 20);

        return () => clearInterval(timer);
      }
    }, [isVisible, target]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {prefix}{Math.floor(count).toLocaleString()}{suffix}
      </span>
    );
  };

  const impactStats = [
    { icon: '🌱', number: 10000, suffix: '+', label: 'Trees Planted' },
    { icon: '👥', number: 5000, suffix: '+', label: 'Citizens Trained on Civic Rights' },
    { icon: '🏛️', number: 20, suffix: '+', label: 'Governance Forums Conducted' },
    { icon: '📜', number: 12, suffix: '', label: 'Policy Recommendations Delivered' },
    { icon: '🌍', number: 15, suffix: '', label: 'Counties Engaged Across Kenya' }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-hatua-green to-hatua-blue">
      <div id="impact-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Numbers that reflect the real change we're creating together in communities across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-white mb-2">
                <CountingNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stories of Change</h3>
            <p className="text-white/90 text-lg">
              "Through HatuaSasa's civic education workshops, our community learned to engage 
              with local government effectively. We successfully advocated for a new water project 
              that now serves over 500 families."
            </p>
            <p className="text-white/70 mt-4 italic">- Community Leader, Kisumu County</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
