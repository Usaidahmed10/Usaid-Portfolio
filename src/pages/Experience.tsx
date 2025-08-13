import { ArrowLeft, Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
const experiences = [
  {
    company: "University of Alberta",
    position: "Teaching Assistant – Statistics (Scheduled)",
    duration: "Sep. 2025 – Dec. 2025",
    location: "Edmonton, AB",
    type: "Teaching",
    logo: "uofa.jpeg",
    description:
      "Appointed as a TA for an undergraduate Statistics course, bridging computing science principles with statistical reasoning.",
    achievements: [
      "Will lead weekly seminars reinforcing data-driven problem-solving and statistical thinking.",
      "Support grading, provide mentorship, and guide students in applying computing concepts to statistical analyses.",
      "Teach advanced use of data-handling and analysis platforms such as Excel and SPSS, including data manipulation, cleaning, and visualization.",
      "Introduce best practices in dataset preparation, descriptive statistics, hypothesis testing, and graphical presentation of results.",
    ],
    technologies: ["Excel", "SPSS", "Python", "pandas", "Matplotlib", "LaTeX", "Git"]
  },
  {
    company: "MPAC (Municipal Property Assessment Corporation)",
    position: "Summer Artificial Intelligence Intern",
    duration: "May 2025 – Aug. 2025",
    location: "Toronto, ON",
    type: "Internship",
    logo: "mpac.jpeg",
    description:
      "Developed a production-ready RAG-based chatbot for internal knowledge access, designed to handle large-scale sensitive document collections.",
    achievements: [
      "Engineered the full pipeline using AWS Bedrock, Lambda, OpenSearch, S3, and CloudWatch for scalable, secure deployments.",
      "Built robust data workflows for extraction, cleaning, keyword tagging, chunking, and embedding of 12,000+ unstructured documents.",
      "Implemented advanced retrieval and optimization techniques, boosting chatbot accuracy to over 85% on firm-sensitive queries.",
      "Presented the system to the CTO, securing approval for production deployment across 2,000+ employees."
    ],
    technologies: ["AWS Bedrock", "AWS Lambda", "OpenSearch", "S3", "CloudWatch", "Python", "sentence-transformers", "Docker"]
  },  
  {
    company: "Undergraduate Artificial Intelligence Society (UAIS), UAlberta",
    position: "Technology Director",
    duration: "Apr 2025 – Present",
    location: "Edmonton, AB",
    type: "Student Leadership",
    logo: "uais.png",
    description:
      "Own the society’s tech stack and digital presence; support events, workshops, and member projects.",
    achievements: [
      "Maintained and enhanced the website (events, resources, announcements) with a component‑driven UI system.",
      "Set up issue templates, CI checks, and deploy previews to speed up contributor workflow.",
      "Mentored members on project scoping and tool choices; co‑ran technical workshops and speaker sessions."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "GitHub Actions", "Figma", "LangChain"]
  },
  {
    company: "Faculty of Engineering, University of Alberta",
    position: "Artificial Intelligence Research Assistant",
    duration: "Sep 2024 – May 2025",
    location: "Edmonton, AB",
    type: "Research",
    logo: "uofaeng.jpeg",
    description:
      "Conducted research on Generative AI models to enhance NLP pipelines for smart-city applications, focusing on high-impact, reproducible solutions.",
    achievements: [
      "Fine-tuned state-of-the-art models using Hugging Face Transformers, boosting task-specific accuracy by 20% over baselines.",
      "Engineered preprocessing workflows with LangDetect and custom pipelines to ensure clean, high-quality English-language input for NLP tasks.",
      "Built interactive Streamlit dashboards to visualize real-time model outputs and analytics, improving accessibility for academic and industry stakeholders.",
      "Prototyped contextual analysis of civic datasets, generating AI-driven insights that attracted collaboration interest from external partners."
    ],
    technologies: ["Hugging-Face", "pandas", "scikit-learn", "PyTorch", "OpenAI API", "Streamlit", "Kaggle"]
  },
  {
    company: "Tutor Connect",
    position: "Co-Founder & Lead Developer",
    duration: "May 2025 – Present",
    location: "Edmonton, AB / Remote",
    type: "Startup",
    logo: "tutorconnect.jpeg",
    description:
      "Online tutoring marketplace connecting Canadian students with vetted overseas agencies at lower cost, integrating technology development with business strategy.",
    achievements: [
      "Shipped core platform flows: request → matching → scheduling → payment; implemented in-platform chat and tutor dashboards.",
      "Designed pricing structure, onboarding process, and 3-demo trial flow to boost student conversion while keeping customer acquisition cost low.",
      "Built an admin dashboard (Supabase) to manage lead intake, status tracking, and affiliate reporting.",
      "Led business operations including contract negotiations, client and partner meetings, and strategic leadership to align technical development with business growth."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Stripe", "Vercel", "PostgreSQL"]
  },  
  {
    company: "Pakistani Students Association (UAlberta)",
    position: "Events & Information Technology Executive",
    duration: "Aug 2024 – Present",
    location: "Edmonton, AB",
    type: "Student Leadership",
    logo: "psa.png",
    description:
      "Delivered large cultural events and modernized digital operations for registrations and announcements.",
    achievements: [
      "Coordinated logistics, marketing, and volunteer schedules for high‑attendance events.",
      "Built a full‑stack site for event listings and sign‑ups; streamlined updates with a content workflow.",
      "Improved stakeholder communication with concise run‑books and checklists."
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Figma", "Git"]
  },
  {
    company: "VConn Pvt. Ltd.",
    position: "Intern (Software Department)",
    duration: "Aug2024",
    location: "Karachi, PK",
    type: "Internship",
    logo: "vconn.jpeg",
    description:
      "Supported data operations and reporting for ongoing projects.",
    achievements: [
      "Maintained datasets and generated periodic reports used in project reviews.",
      "Streamlined data entry and validation flows to reduce manual errors.",
      "Built quick‑glance dashboards for trend checks."
    ],
    technologies: ["Excel", "Google Sheets", "Python", "Data Cleaning"]
  },
  {
    company: "EduFord",
    position: "Web Development Intern",
    duration: "May 2023",
    location: "Remote",
    type: "Internship",
    logo: "eduford.png",
    description:
      "Built a responsive academic/student‑services template and improved mobile usability.",
    achievements: [
      "Implemented accessible navigation patterns; reduced layout shift and improved mobile Lighthouse scores.",
      "Collaborated with stakeholders to prioritize content and student flows.",
      "Documented components for faster iteration."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Figma", "Git"]
  },
  {
    company: "Nixor Engineering Solutions (Student‑led R&D)",
    position: "Chief Operations Officer",
    duration: "Sep 2022 – Jun 2023",
    location: "Karachi, PK",
    type: "Student Leadership",
    logo: "nes.jpeg",
    description:
      "Oversaw student R&D projects and workshops; standardized planning and delivery processes.",
    achievements: [
      "Supervised builds including an RFID access system and smart‑irrigation prototype.",
      "Delivered an introductory Python workshop for 100+ students with curated exercises.",
      "Introduced project briefs and estimation templates to reduce planning time."
    ],
    technologies: ["Python", "Arduino", "RFID", "Git", "Figma"]
  },
  {
    company: "Nixor College",
    position: "Senior Teaching Assistant — A‑Level Mathematics & Biology",
    duration: "Sep 2021 – Jun 2023",
    location: "Karachi, PK",
    type: "Teaching",
    logo: "nixor.jpeg",
    description:
      "Supported A‑Level cohorts through tutorials, workshops, and exam prep.",
    achievements: [
      "Tutored 200+ students; helped drive notable improvements across supported cohorts.",
      "Ran problem‑solving and exam strategy sessions; authored structured practice sets.",
      "Tracked student progress to personalize support and close skill gaps."
    ],
    technologies: ["LaTeX", "Excel", "Google Classroom", "Slides"]
  },
];




const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-4xl mx-auto">
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
              <span className="text-primary"> Work Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             A results-driven journey across diverse roles in the tech ecosystem, delivering solutions through innovation, collaboration, and leadership.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl group animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-primary mb-1 group-hover:text-primary/80 transition-colors duration-300">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg font-medium">
                        <div className="p-1.5 rounded bg-background/50 group-hover:bg-primary/10 transition-all duration-300">
                        <img src={`/${experience.logo}`} alt={experience.company} className="h-9 w-9" />
                        </div>
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-3">
                      <Badge 
                        variant="secondary" 
                        className="w-fit bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 group-hover:scale-105 px-2 py-1 text-xs sm:text-sm mb-2"
                      >
                        <Briefcase className="mr-2 h-4 w-4" />
                        {experience.type}
                      </Badge>
                      <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2 font-medium">
                          <Calendar className="h-4 w-4 text-primary" />
                          {experience.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                       {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground group/achievement">
                          <span className="text-primary mt-1 text-lg group-hover/achievement:scale-125 transition-transform duration-300">•</span>
                          <span className="leading-relaxed group-hover/achievement:text-foreground transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="bg-background/50 hover:bg-primary/10 border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;