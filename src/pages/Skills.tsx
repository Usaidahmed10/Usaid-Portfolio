import {
  ArrowLeft, Award, Code, Database, Globe, Smartphone, Wrench, BarChart, Brain, Layers, Flame, Terminal, GitBranch, FileSpreadsheet, Feather, BookOpen, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  {
    title: "Data Analysis",
    icon: <BarChart className="h-6 w-6" />,
    skills: [
      { name: "Python (Pandas, NumPy)", level: 95 },
      { name: "Matplotlib / Seaborn", level: 85 },
      { name: "R", level: 90 },
      { name: "SQL", level: 95 },
      { name: "Excel / Google Sheets", level: 95 }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Scikit-learn", level: 90 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow / Keras", level: 85 },
      { name: "LangChain / LangGraph / CrewAI", level: 85 },
      { name: "Hugging Face Transformers", level: 80 }
    ]
  },
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Node.js", level: 85 }
    ]
  },
  {
    title: "Dev Tools & Platforms",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Amazon Web Services", level: 90 },
      { name: "Streamlit / Gradio", level: 85 },
      { name: "Docker", level: 95 },
      { name: "N8N", level: 85 },
    ]
  }
];

const certifications = [
  {
    title: "Amazon Bedrock Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "/certs/aws-bedrock-essentials.jpeg"
  },
  {
    title: "Amazon OpenSearch Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "/certs/aws-opensearch-essentials.jpeg"
  },
  {
    title: "AWS SageMaker Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "/certs/aws-sagemaker-essentials.jpeg"
  },
  {
    title: "Building RAG Workflows with AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "/certs/aws-rag-workflows.jpeg"
  },
  {
    title: "Customizing and Evaluating LLMs with AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "/certs/aws-customize-evaluate-llms.jpeg"
  }
];


// Skill icon mapping
const skillIconMap: Record<string, { icon: JSX.Element; color: string }> = {
  "React": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-5 w-5" alt="React" />, color: ""
  },
  "React / Next.js": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-5 w-5" alt="React / Next.js" />, color: ""
  },
  "Tailwind CSS": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="h-5 w-5" alt="Tailwind CSS" />, color: ""
  },
  "Python": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-5 w-5" alt="Python" />, color: ""
  },
  "R": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" className="h-5 w-5" alt="R" />, color: ""
  },
  "Docker": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-5 w-5" alt="Docker" />, color: ""
  },
  "Pandas": { icon: <FileSpreadsheet className="h-5 w-5 text-yellow-700" />, color: "text-yellow-700" },
  "NumPy": { icon: <Feather className="h-5 w-5 text-blue-500" />, color: "text-blue-500" },
  "Matplotlib": { icon: <BarChart className="h-5 w-5 text-purple-500" />, color: "text-purple-500" },
  "Seaborn": { icon: <Flame className="h-5 w-5 text-pink-500" />, color: "text-pink-500" },
  "Scikit-learn": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" className="h-5 w-5" alt="Scikit-learn" />, color: ""
  },
  "PyTorch": { icon: <Flame className="h-5 w-5 text-orange-600" />, color: "text-orange-600" },
  "TensorFlow": { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="h-5 w-5" alt="TensorFlow" />, color: "" },
  "Keras": { icon: <Flame className="h-5 w-5 text-red-400" />, color: "text-red-400" },
  "LangChain": {
    icon: <img src="/langchain.svg" className="h-5 w-5" alt="LangChain" />, color: ""
  },
  "Amazon Web Services": {
    icon: <img src="/aws.jpeg" className="h-5 w-5" alt="aws" />, color: ""
  },
  "N8N": {
    icon: <img src="/n8n.png" className="h-5 w-5" alt="n8n" />, color: ""
  },
  "LangGraph": { icon: <Layers className="h-5 w-5 text-blue-600" />, color: "text-blue-600" },
  "CrewAI": { icon: <Brain className="h-5 w-5 text-fuchsia-500" />, color: "text-fuchsia-500" },
  "Hugging Face": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
  "Transformers": { icon: <Sparkles className="h-5 w-5 text-yellow-400" />, color: "text-yellow-400" },
  "TypeScript": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-5 w-5" alt="TypeScript" />, color: ""
  },
  "JavaScript": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-5 w-5" alt="JavaScript" />, color: ""
  },
  "Node.js": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-5 w-5" alt="Node.js" />, color: ""
  },
  "SQL": { icon: <Database className="h-5 w-5 text-indigo-500" />, color: "text-indigo-500" },
  "Excel": { icon: <FileSpreadsheet className="h-5 w-5 text-green-600" />, color: "text-green-600" },
  "Google Sheets": { icon: <FileSpreadsheet className="h-5 w-5 text-green-400" />, color: "text-green-400" },
  "Git": { icon: <GitBranch className="h-5 w-5 text-orange-500" />, color: "text-orange-500" },
  "GitHub": { icon: <GitBranch className="h-5 w-5 text-gray-800 dark:text-white" />, color: "text-gray-800 dark:text-white" },
  "VS Code": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg" className="h-5 w-5" alt="Cursor" />, color: ""
  },
  "Streamlit": { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" className="h-5 w-5" alt="Streamlit" />, color: "" },
  "Gradio": { icon: <Flame className="h-5 w-5 text-gray-400" />, color: "text-gray-400" },
  "Linux": {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="h-5 w-5" alt="Figma" />, color: ""
  },
  "Bash": { icon: <Terminal className="h-5 w-5 text-gray-600" />, color: "text-gray-600" },
  "Excel / Google Sheets": { icon: <FileSpreadsheet className="h-5 w-5 text-green-500" />, color: "text-green-500" },
  "LangChain / LangGraph / CrewAI": { icon: <img src="https://docs.langchain.com/_static/logo.svg" className="h-5 w-5" alt="LangChain" />, color: "" },
  "TensorFlow / Keras": { icon: <Flame className="h-5 w-5 text-orange-500" />, color: "text-orange-500" },
  "Matplotlib / Seaborn": { icon: <BarChart className="h-5 w-5 text-purple-500" />, color: "text-purple-500" },
  "Face": {
    icon: <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
  "Hugging Face Transformers": {
    icon: <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />, color: ""
  },
};

function getSkillIcon(skillName: string) {
  // Use only the first part if skillName contains '/'
  const mainSkill = skillName.split('/')[0].split('(')[0].trim();
  if (skillIconMap[mainSkill]) return skillIconMap[mainSkill].icon;
  if (skillIconMap[skillName]) return skillIconMap[skillName].icon;
  // Try to find a partial match for Hugging Face
  if (skillName.toLowerCase().includes('hugging face')) {
    return <img src="https://huggingface.co/front/assets/huggingface_logo.svg" className="h-5 w-5" alt="Hugging Face" />;
  }
  // Try to find a partial match for LangChain (including as first part of multi-skill)
  if (mainSkill.toLowerCase().includes('langchain') || skillName.toLowerCase().includes('langchain')) {
    return <img src="/langchain.svg" className="h-5 w-5" alt="LangChain" />;
  }
  // Try to find a partial match for aws
  if (mainSkill.toLowerCase().includes('amazon web services') || skillName.toLowerCase().includes('amazon web services')) {
    return <img src="/aws.jpeg" className="h-5 w-5" alt="aws" />;
  }
  // Try to find a partial match for N8N
  if (mainSkill.toLowerCase() === 'n8n' || skillName.toLowerCase().includes('n8n')) {
    return <img src="/n8n.png" className="h-5 w-5" alt="n8n" />;
  }
  // Default icon
  return <Code className="h-5 w-5 text-primary" />;
}

// Certification issuer icon mapping
const certIssuerIconMap: Record<string, JSX.Element> = {
  "aws": <img src="/aws.jpeg" className="h-5 w-5" alt="aws" />, // Place aws.jpeg in public
  "stanford": <img src="/stanford.svg" className="h-5 w-5" alt="Stanford" />, // Place stanford.svg in public
  "google": <img src="/google.svg" className="h-5 w-5" alt="Google" />, // Place google.svg in public
  "freecodecamp": <img src="/freecodecamp.svg" className="h-5 w-5" alt="freeCodeCamp" />, // Place freecodecamp.svg in public
  "datacamp": <img src="/datacamp.svg" className="h-5 w-5" alt="DataCamp" />, // Place datacamp.svg in public
  "coursera": <img src="/coursera.svg" className="h-5 w-5" alt="Coursera" />, // Place coursera.svg in public
};

function getCertIssuerIcon(issuer: string) {
  const lower = issuer.toLowerCase();
  for (const key in certIssuerIconMap) {
    if (lower.includes(key)) return certIssuerIconMap[key];
  }
  return null;
}

const Skills = () => {
  const navigate = useNavigate();

  // Example list of UofA courses (add more as needed)
  const courses = [
    // University of Alberta - Fall 2025
    {
      name: "Introduction to Reinforcement Learning",
      code: "CMPUT 365",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/365"
    },
    {
      name: "Search and Planning in Artificial Intelligence",
      code: "CMPUT 366",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/366"
    },
    {
      name: "Software Process and Product Management",
      code: "CMPUT 401",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/401"
    },
    {
      name: "Software Quality",
      code: "CMPUT 402",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/402"
    },
  
    // University of Alberta - Winter 2025
    {
      name: "Ethics in Data Science and AI",
      code: "CMPUT 200",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/200"
    },
    {
      name: "Algorithms I",
      code: "CMPUT 204",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/204"
    },
    {
      name: "Introduction to Software Engineering",
      code: "CMPUT 301",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/301"
    },
    {
      name: "Intermediate Microeconomic Theory I",
      code: "ECON 281",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/econ/281"
    },
    {
      name: "Case Studies in Research",
      code: "ENGL 103",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/engl/103"
    },
  
    // University of Alberta - Fall 2024
    {
      name: "Practical Programming Methodology",
      code: "CMPUT 201",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/201"
    },
    {
      name: "Machine Learning I",
      code: "CMPUT 267",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/267"
    },
    {
      name: "File and Database Management",
      code: "CMPUT 291",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/291"
    },
    {
      name: "Introduction to Macroeconomics",
      code: "ECON 102",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/econ/102"
    },
    {
      name: "Introduction to Dinosaurs and the Fossil Record",
      code: "PALEO 200",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/paleo/200"
    },
  
    // University of Alberta - Winter 2024
    {
      name: "Introduction to Foundations of Computing II",
      code: "CMPUT 175",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/175"
    },
    {
      name: "Formal Systems and Logic",
      code: "CMPUT 272",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/272"
    },
    {
      name: "Introduction to Microeconomics",
      code: "ECON 101",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/econ/101"
    },
    {
      name: "Calculus for the Physical Sciences II",
      code: "MATH 146",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/math/146"
    },
    {
      name: "Linear Algebra II",
      code: "MATH 225",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/math/225"
    },
  
    // University of Alberta - Fall 2023
    {
      name: "Introduction to Foundations of Computing I",
      code: "CMPUT 174",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/cmput/174"
    },
    {
      name: "Calculus for the Physical Sciences I",
      code: "MATH 144",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/math/144"
    },
    {
      name: "Introduction to Applied Statistics II",
      code: "STAT 252",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/stat/252"
    },
    {
      name: "Writing in the Disciplines",
      code: "WRS 102",
      logo: "/uofa.jpeg",
      institution: "University of Alberta",
      link: "https://apps.ualberta.ca/catalogue/course/wrs/102"
    }
  ];
  

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
              <span className="text-primary">Skills & Certifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and professional certifications that drive my development journey in the tech field
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-slide-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-primary group-hover:text-primary/80 transition-colors duration-300">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3 group/skill">
                        <div className="flex justify-between text-sm items-center gap-2">
                          <span className="flex items-center gap-3 text-foreground group-hover/skill:text-primary transition-colors duration-300">
                            <div className="p-1.5 rounded bg-background/50 group-hover/skill:bg-primary/10 transition-all duration-300">
                              {getSkillIcon(skill.name)}
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <span className="text-muted-foreground font-semibold px-2 py-1 rounded bg-background/30">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-3 bg-muted/30 group-hover/skill:bg-muted/50 transition-all duration-300" 
                          />
                          <div 
                            className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group animate-bounce-in"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 text-base leading-tight">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 font-medium">
                        <div className="p-1.5 rounded bg-background/50 group-hover:bg-primary/10 transition-all duration-300">
                          {getCertIssuerIcon(cert.issuer)}
                        </div>
                        {cert.issuer}
                      </span>
                      <Badge variant="secondary" className="group-hover:bg-primary/20 transition-colors duration-300">
                        {cert.date}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                    >
                      <a
                        href={cert.credentialId}              // local PDF in /public
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Award className="h-4 w-4" />
                        View Credential
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <Card 
                  key={idx}
                  className="bg-card/50 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group animate-bounce-in"
                  style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 text-base leading-tight flex items-center gap-2">
                      <div className="p-1.5 rounded bg-background/50 group-hover:bg-primary/10 transition-all duration-300">
                        <img src={course.logo} alt={course.institution} className="w-6 h-6" />
                      </div>
                      {course.name}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between gap-2">
                      <span className="text-muted-foreground text-xs font-medium">{course.institution}</span>
                      <Badge variant="secondary" className="group-hover:bg-primary/20 transition-colors duration-300">
                        {course.code}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  {course.link && (
                    <CardContent className="pt-0">
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300" 
                      >
                        <a 
                          href={course.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          View Module
                        </a>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;