
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openBios, setOpenBios] = useState<{ [key: string]: boolean }>({});

  const toggleBio = (memberName: string) => {
    setOpenBios(prev => ({
      ...prev,
      [memberName]: !prev[memberName]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const advisoryBoardMembers = [
    {
      name: "Sen. Amos Matagaro",
      role: "Executive Director",
      image: "/lovable-uploads/533c7cfb-d756-42d3-91e8-ccc5de786f84.png",
      bio: "Dedicated to empowering young leaders and fostering youth-led innovation in governance.",
      fullBio: `Amos Ogwankwa Matagaro is a distinguished youth leader, civic educator, and governance advocate with a deep commitment to youth empowerment, climate justice, and community-led development. He currently serves as the Executive Director and Founder of HatuaSasa Network, where he leads programs that promote civic participation, leadership training, and social transformation among young people across Kenya.

He holds the position of Youth Senator for Kisii County under the Youth Senate Kenya, where he champions policy and development frameworks that enhance youth inclusion in governance and economic advancement.

Amos is the recipient of a Certificate of Achievement from the United Nations Foundation, awarded for leading a youth action group that gained the most public support during the Big Brainstorm 2023. He also secured a climate advocacy grant from the National Democratic Institute (NDI) in 2024, and previously earned a prestigious leadership scholarship from the High Commission of India for executive training in New Delhi.

His professional development includes rigorous training through globally recognized institutions:
• Political Parties Leadership Institute, National Democratic Institute (2023–2024)
• International Training Programme on Developing Human Capabilities, NILRD, India (2022)
• Nairobi Summer School on Climate Justice, Kenyatta University (2023)
• Youth Leadership Academy, International Republican Institute (2021)

Amos has a rich leadership history, including service as Senior Personal Secretary in the Office of the Governor – Nyamira County (2020–2023), where he enhanced executive coordination and stakeholder management. He also served as Branch Secretary of the Amani National Congress (ANC) in Kisii County and was appointed to the National Youth Delegation at the 5th Devolution Conference (2018), where he contributed to youth policy discussions on national development.

Previously, he was the Chairperson of the Mugirango Youth Network and Development Association, where he mobilized student leaders and advanced community-focused initiatives. He also held key positions within student leadership, including Secretary General of the Kenyatta University Kisii County Students Association and Chairperson of the South Mugirango Constituency Students Association.

Amos continues to contribute through voluntary community service, including education advocacy, youth mentorship, and environmental action. He is widely respected for his inclusive leadership, commitment to impact, and dedication to creating opportunities for the next generation.`
    },
    {
      name: "Cherotich Rono",
      role: "Advisory Board Chairperson",
      image: "/lovable-uploads/BenedictusRono.jpeg",
      bio: "Passionate advocate for civic education and community-driven development initiatives.",
      fullBio: `Cherotich Rono is an experienced program management specialist with a strong background in international affairs, focusing on democracy and governance, elections, inclusion programming, public finance management capacity building, institutional support and sub-grant management. She received legislative training from the Center for International Development at the State University of New York, during which she was attached to the Kenya National Assembly for one year. 

Benedictus has played a key role in developing leadership training curricula used to train political aspirants across two election cycles. She was instrumental in the formation of the caucus of Kenya Young Members of County Assemblies (KYMCA) and establishment of over 20 county-level caucuses to enhance youth participation in leadership. She also spearheaded the creation of Inter-Party Youth Forums (IPYF) in 12 counties, fostering dialogue and engagement between youth and governments. 

Benedictus has managed nationwide election agent training in collaboration with the Oslo Centre, the Office of the Registrar of Political Parties, and the Independent Electoral and Boundaries Commission, ensuring compliance with updated laws and procedures. Additionally, she contributed to the induction of women Members of County Assemblies, leading to the formation of women's caucuses and strengthening their legislative roles. 

She currently serves as the program lead overseeing NDI's fiscal transparency and accountability and youth programming in Kenya. In addition, she coordinates exchanges between the Kenya National Assembly and the U.S. House of Representatives through the House Democracy Partnership.`
    },
    {
      name: "Mr. Robert Mwangi",
      role: "Advisory Board Member",
      image: "/lovable-uploads/RobertMwangi.jpeg",
      bio: "Expert in strategic planning and organizational development with extensive experience in community empowerment.",
    },
    {
      name: "CPA Wycliff Bichanga",
      role: "Advisory Board Member",
      image: "/lovable-uploads/8d14fe5e-5666-46d9-b4f1-c5897be62845.png",
      bio: "Leading transformative change in governance and community empowerment across Kenya.",
    },
    {
      name: "Mr. Benson Simba",
      role: "Advisory Board Member",
      image: "/lovable-uploads/370f3bcd-a3be-403c-8d31-aa94913f74f2.png",
      bio: "Expert in climate justice and environmental policy with years of experience.",
    },
    {
      name: "Mr. Dennis Omboga",
      role: "Advisory Board Member",
      image: "/lovable-uploads/a1f0dd39-e68e-4fd9-b989-2e897f3ceba6.png",
      bio: "Passionate advocate for civic education and community-driven development initiatives.",
    },
  ];

  const secretariatMembers = [
    {
      name: "Nyabuto Hamphrey Okanga",
      role: "Senior Principal Program Officer",
      image: "/lovable-uploads/7e412934-a205-48aa-9c2a-38ddae8a3a18.png",
      bio: "Nyabuto Hamphrey Okanga is a passionate Kenyan public health professional dedicated to climate justice through community-led solutions. He actively works to empower vulnerable communities to respond to climate related challenges. His grassroots approach, data-driven mindset, and commitment to sustainability align with HatuaSasa's mission to build citizen-led climate resilience. Nyabuto sees climate action not as a crisis, but as a powerful opportunity to transform lives and create lasting change from the ground up.",
    },
    {
      name: "Brian Achira Ongaga",
      role: "Head Of ICT Department",
      image: "/lovable-uploads/533c7cfb-d756-42d3-91e8-ccc5de786f84.png", // placeholder until we get his image
      bio: "Coming soon",
    },
  ];

  const renderMemberCard = (member: any, showCollapsibleBio = false) => (
    <div
      key={member.name}
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
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>
        
        {showCollapsibleBio && member.fullBio && (
          <Collapsible open={openBios[member.name]} onOpenChange={() => toggleBio(member.name)}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-hatua-green/10 rounded-lg hover:bg-hatua-green/20 transition-colors">
              <span className="font-medium text-hatua-green">Read Full Bio</span>
              {openBios[member.name] ? (
                <ChevronUp className="h-4 w-4 text-hatua-green" />
              ) : (
                <ChevronDown className="h-4 w-4 text-hatua-green" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {member.fullBio}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );

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

        {/* Advisory Board Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advisory Board
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoardMembers.map((member) => renderMemberCard(member, member.fullBio ? true : false))}
          </div>
        </div>

        {/* Secretariat Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Secretariat
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {secretariatMembers.map((member) => renderMemberCard(member, false))}
          </div>
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
