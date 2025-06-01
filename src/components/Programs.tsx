
const Programs = () => {
  const programs = [
    {
      title: "Climate Change",
      icon: "🌍",
      color: "bg-gradient-to-br from-hatua-green to-green-600",
      description: "At HatuaSasa Network, we are deeply committed to advocating for climate action and justice. We recognize the urgent challenges posed by climate change and work tirelessly to promote sustainable practices and policies that protect our environment. Through community engagement and awareness campaigns, we strive to empower individuals and organizations to take action against climate change, ensuring that the voices of those most affected are heard in decision-making processes.",
      activities: [
        "Promote sustainable environmental practices",
        "Engage communities in tree planting and clean-up campaigns",
        "Educate the public on climate change impacts and mitigation",
        "Advocate for inclusive and effective climate policies",
        "Support youth-led green initiatives and innovations"
      ],
      quote: "Those most affected by climate change must have a seat at the table in shaping climate solutions."
    },
    {
      title: "Governance",
      icon: "🏛️",
      color: "bg-gradient-to-br from-hatua-blue to-blue-600",
      description: "We believe that good governance is the foundation of thriving communities. HatuaSasa Network advocates for transparent, accountable, and participatory local and county governance. Our efforts focus on promoting civic engagement, supporting policy reforms, and enhancing the capacity of local governments to serve their constituents. By fostering an environment of accountability and integrity, we aim to strengthen democracy and improve the quality of life for all citizens.",
      activities: [
        "Civic engagement campaigns",
        "Policy reform advocacy at local and county levels",
        "Capacity-building for government officials and citizens",
        "Community scorecards and social audits",
        "Public forums and participatory budgeting initiatives"
      ],
      quote: "We aim to ensure that governance works for the people it serves."
    },
    {
      title: "Community Empowerment",
      icon: "👥",
      color: "bg-gradient-to-br from-hatua-yellow to-orange-500",
      description: "Empowering communities through civic education is at the heart of our mission. HatuaSasa Network is dedicated to promoting awareness of rights and responsibilities among community members. Through workshops, training sessions, and advocacy initiatives, we equip individuals with the knowledge and skills necessary to participate actively in civic life. Our goal is to build informed and engaged citizens who can effectively contribute to the development and well-being of their communities.",
      activities: [
        "Civic education workshops",
        "Leadership and advocacy training",
        "Rights and responsibilities awareness sessions",
        "Youth empowerment and mentorship",
        "Women's rights and inclusion programs"
      ],
      quote: "We believe informed citizens are powerful agents of change."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, these thematic areas form the foundation of our work, as we strive to create a just and equitable society for all Kenyans.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`${program.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">{program.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {program.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start space-x-3">
                      <span className="text-hatua-green text-xl">•</span>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <blockquote className="italic text-gray-600 border-l-4 border-hatua-yellow pl-4">
                  "{program.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
