
import { useState } from "react";
import { Calendar, MapPin, Users, Target, Award, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface EventDetails {
  date: string;
  venue: string;
  organizers: string[];
  participants: string[];
  objectives: string[];
  keyHighlights: string[];
  outcomes: string[];
  externalLink?: {
    url: string;
    text: string;
  };
  images: string[];
}

interface Event {
  id: string;
  title: string;
  summary: string;
  category: "Climate Change" | "Governance" | "Community Empowerment";
  featured: boolean;
  details: EventDetails;
}

const Events = () => {
  const [events] = useState<Event[]>([
    {
      id: "kisii-climate-workshop-2024",
      title: "Empowering Climate Champions: Capacity-Building Workshop",
      summary: "A transformative workshop in Kisii County that equipped grassroots climate champions with essential knowledge and skills to combat climate change impacts in their communities.",
      category: "Climate Change",
      featured: true,
      details: {
        date: "August 14, 2024",
        venue: "Kisii Agricultural Training Centre (ATC), Kisii County, Kenya",
        organizers: [
          "Kisii County Climate Change Directorate",
          "Hatua Sasa Network"
        ],
        participants: [
          "Members from Nyatieko ward climate change committee",
          "Members from Boochi Tendere ward climate change committee", 
          "Members from Boochi Borabu ward climate change committee"
        ],
        objectives: [
          "Equip grassroots climate champions with knowledge and skills to combat climate change impacts",
          "Focus on understanding the effects of climate change on Kenya's economy",
          "Build capacity for community-level climate action"
        ],
        keyHighlights: [
          "Keynote address by the Minister for Climate Change emphasizing continuous education and capacity building",
          "Vision shared for a resilient Kisii with climate champions in every ward",
          "Minister's pledge for county commitment to organizing further workshops",
          "Encouragement for Hatua Sasa Network to return and train additional committees across 40+ wards"
        ],
        outcomes: [
          "Participants gained enhanced skills and renewed motivation",
          "Community champions ready to serve as proactive agents of change",
          "Strengthened collaboration between county government and civil society",
          "Foundation laid for expanded climate action across Kisii County"
        ],
        externalLink: {
          url: "https://climatechange.kisii.go.ke",
          text: "Read the full article: Empowering Climate Champions"
        },
        images: [
          "/lovable-uploads/42562e89-aff0-4207-aa41-6f36a2cd05b0.png",
          "/lovable-uploads/87461f51-9292-48d3-bd5f-7fe54fa958d2.png",
          "/lovable-uploads/2cd8f7a7-03c4-4e19-8e15-d9837b998ad3.png",
          "/lovable-uploads/0920e2ac-9f54-433c-89f3-4b14dc30a2f3.png",
          "/lovable-uploads/55f9c3ad-664e-4d5d-a17c-3dd4dbb7bfa4.png",
          "/lovable-uploads/fec6d8a4-9e8a-4ea1-9362-2f73053f2887.png",
          "/lovable-uploads/f6ce13a1-5943-401d-997b-eb6ce284d5e4.png",
          "/lovable-uploads/e47e34fe-393a-48a6-b812-718fc9fb590d.png",
          "/lovable-uploads/20d1bbbe-f1aa-4a8a-af14-bcf2748bb219.png",
          "/lovable-uploads/c0e27725-57d1-4578-8e23-2bb9c9e74dd9.png"
        ]
      }
    }
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Climate Change":
        return "bg-hatua-green text-white";
      case "Governance":
        return "bg-hatua-blue text-white";
      case "Community Empowerment":
        return "bg-hatua-yellow text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-hatua-green to-hatua-blue text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Events & Impact
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Discover the transformative events and initiatives that are shaping communities 
                across Kenya through climate action, governance, and empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Events Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive collection of events, workshops, and community initiatives 
                that demonstrate our commitment to meaningful change.
              </p>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 bg-hatua-yellow text-black rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 leading-relaxed">
                          {event.summary}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={event.id} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                          <span className="text-lg font-semibold text-hatua-green">
                            View Event Details & Gallery
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Event Details */}
                            <div className="space-y-6">
                              {/* Basic Info */}
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                  <Calendar className="h-5 w-5 text-hatua-green" />
                                  <div>
                                    <p className="font-semibold text-gray-900">Date</p>
                                    <p className="text-gray-600">{event.details.date}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                  <MapPin className="h-5 w-5 text-hatua-green mt-1" />
                                  <div>
                                    <p className="font-semibold text-gray-900">Venue</p>
                                    <p className="text-gray-600">{event.details.venue}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Organizers */}
                              <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                  <Users className="h-5 w-5 text-hatua-green" />
                                  Organizers
                                </h4>
                                <ul className="space-y-1">
                                  {event.details.organizers.map((organizer, index) => (
                                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-hatua-green">
                                      {organizer}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Participants */}
                              <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                  <Users className="h-5 w-5 text-hatua-blue" />
                                  Participants
                                </h4>
                                <ul className="space-y-1">
                                  {event.details.participants.map((participant, index) => (
                                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-hatua-blue">
                                      {participant}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Objectives */}
                              <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                  <Target className="h-5 w-5 text-hatua-yellow" />
                                  Objectives
                                </h4>
                                <ul className="space-y-2">
                                  {event.details.objectives.map((objective, index) => (
                                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-hatua-yellow">
                                      {objective}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Gallery and Highlights */}
                            <div className="space-y-6">
                              {/* Event Gallery */}
                              <div>
                                <h4 className="font-bold text-gray-900 mb-4">Event Gallery</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  {event.details.images.map((image, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                                      <img 
                                        src={image} 
                                        alt={`Event photo ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Key Highlights */}
                              <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                  <Award className="h-5 w-5 text-hatua-green" />
                                  Key Highlights
                                </h4>
                                <ul className="space-y-2">
                                  {event.details.keyHighlights.map((highlight, index) => (
                                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-hatua-green">
                                      {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Outcomes */}
                              <div>
                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                                  <Award className="h-5 w-5 text-hatua-blue" />
                                  Outcomes & Impact
                                </h4>
                                <ul className="space-y-2">
                                  {event.details.outcomes.map((outcome, index) => (
                                    <li key={index} className="text-gray-700 pl-4 border-l-2 border-hatua-blue">
                                      {outcome}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* External Link */}
                              {event.details.externalLink && (
                                <div className="pt-4">
                                  <Button 
                                    asChild
                                    className="bg-hatua-green hover:bg-hatua-green/90 text-white"
                                  >
                                    <a 
                                      href={event.details.externalLink.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                      {event.details.externalLink.text}
                                    </a>
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
