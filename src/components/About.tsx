
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            HatuaSasa Network is a grassroots, non-profit organization dedicated to promoting 
            sustainable development, accountable governance, and empowered communities in Kenya. 
            Our team is composed of passionate advocates, community educators, policy influencers, 
            and young changemakers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-hatua-green to-hatua-blue p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-lg">
                A society where every individual is empowered, every voice is heard, 
                and every action matters toward a sustainable future.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-hatua-yellow to-hatua-green p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-lg">
                To promote climate justice, participatory governance, and civic education 
                through grassroots advocacy, policy engagement, and community-based programs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              {[
                { icon: '⚖️', title: 'Equity', desc: 'Fair and just treatment for all' },
                { icon: '🔍', title: 'Transparency', desc: 'Open and honest communication' },
                { icon: '🤝', title: 'Participation', desc: 'Inclusive community engagement' },
                { icon: '🌱', title: 'Sustainability', desc: 'Long-term environmental responsibility' },
                { icon: '✨', title: 'Integrity', desc: 'Ethical principles in all we do' }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{value.title}</h4>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
