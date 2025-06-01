
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const teamMembers = [
    {
      name: "Sen. Amos Matagaro",
      role: "Executive Director",
      image: "/lovable-uploads/533c7cfb-d756-42d3-91e8-ccc5de786f84.png",
      bio: "Dedicated to empowering young leaders and fostering youth-led innovation in governance.",
    },
    {
      name: "Benedictus Rono",
      role: "Advisory Board Chairperson",
      image: "/lovable-uploads/BenedictusRono.jpeg",
      bio: "Passionate advocate for civic education and community-driven development initiatives.",
    },
    {
      name: "Mr. Robert Mwangi",
      role: "Member",
      image: "/lovable-uploads/RobertMwangi.jpeg",
      bio: "Expert in strategic planning and organizational development with extensive experience in community empowerment.",
    },
    {
      name: "CPA Wycliff Bichanga",
      role: "Member",
      image: "/lovable-uploads/8d14fe5e-5666-46d9-b4f1-c5897be62845.png",
      bio: "Leading transformative change in governance and community empowerment across Kenya.",
    },
    {
      name: "Mr. Benson Simba",
      role: "Member",
      image: "/lovable-uploads/370f3bcd-a3be-403c-8d31-aa94913f74f2.png",
      bio: "Expert in climate justice and environmental policy with years of experience.",
    },
    {
      name: "Mr. Dennis Omboga",
      role: "Member",
      image: "/lovable-uploads/a1f0dd39-e68e-4fd9-b989-2e897f3ceba6.png",
      bio: "Passionate advocate for civic education and community-driven development initiatives.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals driving change through advocacy,
            education, and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-hatua-blue font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-hatua-yellow/10 to-hatua-green/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              We're always looking for passionate individuals who share our
              vision of empowered communities and sustainable development.
            </p>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="bg-hatua-green hover:bg-hatua-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
