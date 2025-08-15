import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    title: "VibeSync: Mood-Driven Social Media App",
    description: "A native Android app designed to help users express, track, and share their emotional journeys. Users can post mood-based updates with text, images, and locations, explore interactive mood maps, and complete gamified VibeQuests to unlock themed emoji bundles via the VibeShift feature. Built with Firebase for authentication, storage, and real-time data handling, and integrated with Google Maps API for location-based features, VibeSync offers a visually engaging, interactive platform for personal mood storytelling.",
    technologies: [ "Java", "Android Studio", "Firebase Auth", "Firebase Firestore", "Firebase Storage", "Google Maps API" ],
    image: "/vibe.png",
    liveUrl: "#",
    githubUrl: "https://github.com/cmput301-w25/project-vibeverse"
  },
  {
    title: "UAlberta CourseLens",
    description: "A centralized platform that streamlines course selection for University of Alberta students by aggregating professor reviews, course details, and accessibility information from sources like RateMyProf, Reddit, and BearTracks. The system delivers real-time difficulty and accessibility insights via custom algorithms, supported by a scalable AWS Lambda backend and a fast, responsive Next.js UI. Designed with a student-first approach, CourseLens ensures informed academic decisions through unified, accessible, and personalized course recommendations.",
    technologies: [ "Next.js", "AWS Lambda", "PostgreSQL", "Python", "Tailwind CSS", "BeautifulSoup", "Requests", "Azure" ],
    image: "/courselens.jpeg",
    liveUrl: "#",
    githubUrl: "https://github.com/Usaidahmed10/CourseLens"
  },
  {
    title: "Tutor Connect",
    description: "An online tutoring marketplace connecting Canadian students with vetted overseas agencies. Features include Google Login, Stripe-powered payments, built-in chat, calendar scheduling with real-time time zone conversion, and automated email triggers. The platform offers affordable rates (up to 50% lower), transparent pricing, risk-free demo sessions, and a responsive Next.js + Tailwind UI deployed on Vercel with Supabase handling authentication, database, and file storage.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Supabase", "PostgreSQL", "Google OAuth", "Stripe", "Node.js", "EmailJS", "Live Chat API"],
    image: "/tutorconnect.png",
    liveUrl: "https://tutorconnectca.vercel.app/",
    githubUrl: "#"
  },
  {
    title: "aMuse: Neuro-Marketing Application",
    description: "A neuro-marketing application integrating with Muse EEG headsets to measure brain activity and analyze consumer engagement for products, speeches, and advertisements. Built for consultancy agencies, it provides data-driven insights through a user-friendly Flutter interface and ensures privacy via secure API hosting and differential privacy measures. Designed for scalability, aMuse supports subscription-based pricing and potential commission-based partnerships with Muse.",
    technologies: ["Flutter", "Dart", "Python", "C++", "CMake", "Jupyter Notebook", "Swift", "Figma", "Android Studio", "BrainFlow API", "Muse-S", "VS Code"],
    image: "/amuse.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Usaidahmed10/neuro-marketing"
  },


];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-card/50 transition-smooth"
        >
          <ArrowLeft className="sm:mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
              <span className="text-primary">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A portfolio of cutting-edge technical skills and globally recognized certifications that underpin my journey as a forward-thinking technologist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group flex flex-col h-full animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      {index !== 0 && project.liveUrl !== "#" && (
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm group-hover:text-muted-foreground/80 transition-colors">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 text-xs px-2 py-1 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    {index !== 0 && project.liveUrl !== "#" && (
                    <Button 
                        variant="hero"
                      size="sm"
                      className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                    </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;