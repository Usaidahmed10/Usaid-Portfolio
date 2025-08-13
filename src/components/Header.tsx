import { useState } from "react";
import { Linkedin, Instagram, Github, Mail, Facebook, Calendar, MoreHorizontal, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import NineDotIcon from "@/components/ui/NineDotIcon";
import { ProfilePane } from "./ProfilePane";
import { EmailPane } from "./EmailPane";
import { ThemeToggle } from "./ThemeToggle";
import React from "react";
const socialLinks = [
  {
    icon: <img src="/github.svg" alt="GitHub" />,
    href: "https://github.com/Usaidahmed10",
    label: "Github"
  },
  {
    icon: <img src="/linkedin.svg" alt="LinkedIn" />,
    href: "https://www.linkedin.com/in/usaid-ahmed-2149422a2",
    label: "Linkedin"
  },
  {
    icon: <img src="/whatsapp.svg" alt="Whatsapp" />,
    label: "Whatsapp"
  },
  {
    icon: <img src="/instagram.svg" alt="Instagram" />,
    href: "https://www.instagram.com/usaidahmed108/",
    label: "Instagram"
  },
  {
    icon: <img src="/facebook.svg" alt="Facebook" />,
    href: "https://www.facebook.com/share/172G11vzzs/",
    label: "Facebook"
  },
  {
    icon: <img src="/calendly.svg" alt="Calendly" />,
    href: "https://calendly.com/usaidahmed108",
    label: "Calendly"
  }
];
export const Header = ({ setIsEmailOpen }: { setIsEmailOpen: (open: boolean) => void }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSocialClick = (social: typeof socialLinks[0], e: React.MouseEvent) => {
    e.preventDefault();
    if (social.label === "Gmail") {
      setIsEmailOpen(true);
    } else {
      window.open(social.href, "_blank");
    }
  };

  return (
    <>
      <header className="w-full pt-5 md:pt-3 pr-5 md:pr-6 z-50">
      <div className="flex items-center justify-end w-full gap-5 md:gap-4 lg:gap-6">
        <ThemeToggle />
        <Button
          variant="ghost"
          className="text-sm md:text-base lg:text-lg text-foreground px-0.5 md:px-1 py-0.5"
          onClick={() => setIsEmailOpen(true)}
        >
          Gmail
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-5 w-5 md:h-5 md:w-5 rounded-2xl transition-smooth hover:scale-110 flex items-center justify-center">
              <NineDotIcon className="w-5 h-5 md:w-4 md:h-4 text-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 md:w-72 lg:w-80 p-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg" align="end">
            <div className="grid grid-cols-3 gap-1">
              {socialLinks.map((social, index) => (
                social.label === "Gmail" ? (
                  <button
                    key={index}
                    onClick={() => setIsEmailOpen(true)}
                    className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer border-none bg-transparent"
                    type="button"
                  >
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-1">
                      {React.cloneElement(social.icon, {
                        className: "w-full h-full object-contain"
                      })}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium text-center break-words max-w-[72px]">{social.label}</span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg hover:bg-card/50 transition-smooth cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden mb-1">
                      {React.cloneElement(social.icon, {
                        className: "w-full h-full object-contain"
                      })}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium text-center break-words max-w-[72px]">{social.label}</span>
                  </a>
                )
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-muted-foreground/20 border-2 border-primary/60 shadow-lg flex items-center justify-center overflow-hidden p-0 hover:border-primary transition-smooth hover:scale-110"
            >
              <img src="/profile.png" alt="User" className="w-full h-full object-cover rounded-full border-2 border-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 max-w-xs md:w-96 md:max-w-md p-2 md:p-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border/30 shadow-lg flex flex-col items-center gap-2 md:gap-4" align="end">
            <img src="/profile.png" alt="Usaid" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mb-1 md:mb-2" />
            <div className="text-center">
                      <div className="text-base md:text-lg font-bold text-foreground">Hi, I am Usaid</div>
        <div className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2">usaid1@ualberta.ca</div>
            </div>
            <div className="my-2 md:my-3">
              <h3 className="text-foreground font-semibold text-sm md:text-base mb-1 md:mb-2">HOW TO USE</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground font-medium">
                <li>🔍 Use <span className="text-primary font-semibold">Search</span> to explore my portfolio</li>
                <li>📧 Click <span className="text-primary font-semibold">Gmail</span> to contact me</li>
                <li>🟦 Use the <span className="text-primary font-semibold">Dot-Menu</span> for more links</li>
                <li>📅 Book a call with <span className="text-primary font-bold">Calendly</span></li>
                <li>🤖 Use the <span className="text-primary font-bold">AI Chatbot</span> to learn more</li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-1 md:gap-2">
              <a href="/about" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs md:text-sm">About Me</Button></a>
              <a href="/projects" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs md:text-sm">Projects</Button></a>
              <a href="/skills" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs md:text-sm">Skills</Button></a>
              <a href="/experience" className="w-full"><Button variant="outline" size="sm" className="w-full justify-center text-xs md:text-sm">Experience</Button></a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
    </>
  );
};