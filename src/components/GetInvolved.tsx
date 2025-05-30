
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import ContactModal from './ContactModal';
import DonationModal from './DonationModal';

const GetInvolved = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
    // Handle subscription logic here
  };

  const involvementOptions = [
    {
      title: "Volunteer",
      icon: "🤝",
      description: "Join our mission on the ground. Whether you're a student, activist, or professional — your time can make a difference.",
      action: "Join as Volunteer",
      color: "bg-hatua-green",
      type: "volunteer" as const
    },
    {
      title: "Partner With Us",
      icon: "🤝",
      description: "We work with civil society groups, government bodies, academic institutions, and private sector partners to create long-lasting change.",
      action: "Explore Partnerships",
      color: "bg-hatua-blue",
      type: "partnership" as const
    },
    {
      title: "Donate",
      icon: "💚",
      description: "Support our programs and help us reach more communities. Every contribution counts toward a stronger and more sustainable future.",
      action: "Donate Now",
      color: "bg-hatua-yellow text-black",
      type: "donate" as const
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? There are many ways you can join us in building 
            a more just, sustainable, and empowered society.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                
                {option.type === 'donate' ? (
                  <DonationModal>
                    <Button className={`${option.color} hover:opacity-90 w-full font-semibold`}>
                      {option.action}
                    </Button>
                  </DonationModal>
                ) : (
                  <ContactModal type={option.type}>
                    <Button className={`${option.color} hover:opacity-90 w-full font-semibold`}>
                      {option.action}
                    </Button>
                  </ContactModal>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-hatua-green to-hatua-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter and follow us on social media to stay updated 
            on our latest programs, events, and impact stories.
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black"
                required
              />
              <Button 
                type="submit" 
                className="bg-hatua-yellow hover:bg-hatua-yellow/90 text-black font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </form>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">💼</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform">📺</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
