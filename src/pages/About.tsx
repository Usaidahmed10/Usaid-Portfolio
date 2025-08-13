import { ArrowLeft, MapPin, Calendar, Mail, GraduationCap, Download, Award, User, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-card/50 transition-smooth"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-6">
          {/* Removed the top WhatsApp button */}
        </div>

        <div className="space-y-8 animate-fade-in">
          {/* Hero Section with Profile */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
            {/* Profile Image Left */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#3a1550] bg-background flex items-center justify-center">
                <Avatar className="w-52 h-52 rounded-full">
                  <AvatarImage src="/profile.png" alt="Usaid" className="object-cover w-full h-full" />
                  <AvatarFallback className="text-5xl bg-primary/10 rounded-full">
                    <User className="w-20 h-20" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            {/* Name, Desc, Buttons Right */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                <span className="text-[#3a1550]">Usaid Ahmed</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
              Future-Forward Engineer: Passionate about AI, Data, and Building Scalable Solutions
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {/* Add badges here if needed */}
              </div>
              <div className="flex gap-4 mt-2">
                <Button asChild variant="hero" className="min-w-[150px]">
                  <a
                    href="/CV - Usaid Ahmed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    View CV
                  </a>
                </Button>
                <Button asChild variant="hero" className="min-w-[150px]">
                  <a
                    href="https://wa.me/15873722069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/whatsapp.svg" alt="WhatsApp" className="sm:mr-2 h-4 w-4 inline" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>


          {/* My Story */}
          <Card className="bg-card/50 backdrop-blur-md border-border/30">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                My story isn't one of privilege, but of a relentless, almost visceral ambition ignited in a 
                middle-class home. While other children explored playgrounds, my childhood was often spent 
                grinding, pushing limits not just in academics, but in disciplined routines, knowing that every 
                ounce of effort was an investment in a future I desperately craved. The relentless efforts and the 
                countless sleepless nights paid off: acceptances poured in from universities across the world, 
                each offering a fully funded scholarship, a profound validation of years of sacrifice. 
              </p>
              <p className="text-muted-foreground">
                Now at UCL, I channel that same fierce drive into the exhilarating world of data
                science and software engineering. I'm utterly obsessed with crafting elegant digital solutions that
                genuinely make a difference, whether it's teaching machines to see, predicting complex patterns, 
                or just making life a little smoother through clever code. When I'm not wrestling with algorithms or 
                optimizing datasets until they practically sing, you'll find me channeling that focus on the cricket 
                pitch or pushing my limits at the gym. It’s where I recharge, strategize, and remember that every 
                challenge, big or small, can be overcome with a disciplined approach and a healthy dose of determination. 
                Let's build something truly remarkable together!
              </p>
            </CardContent>
          </Card>

{/* Education Section */}
<Card className="bg-card/50 backdrop-blur-md border-border/30">
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-lg sm:text-2xl">
      <GraduationCap className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
      Educational Background
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-10">
    <div className="pb-10">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mr-2" />
          <div>
            <h3 className="font-semibold text-foreground">Honours Bachelor of Science in Computing Science</h3>
            <p className="text-muted-foreground">University of Alberta, Canada</p>
            <p className="text-sm text-muted-foreground mt-1">
              4.0 GPA, Dean’s Honor Roll (2023–2025), Dean’s Research Award, multiple merit-based scholarships
            </p>
          </div>
        </div>
        <Badge variant="outline">Sep 2023 – Present</Badge>
      </div>
    </div>
    <div className="pb-10">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mr-2" />
          <div>
            <h3 className="font-semibold text-foreground">
              A-Levels (Mathematics, Further Mathematics, Biology, Physics, Chemistry)
            </h3>
            <p className="text-muted-foreground">Nixor College, Pakistan</p>
            <p className="text-sm text-muted-foreground mt-1">
              5 A*s, 100% merit scholarship, Senior Teaching Assistant for Mathematics & Biology, top percentile nationally
            </p>
          </div>
        </div>
        <Badge variant="outline">Aug 2021–Jun 2023</Badge>
      </div>
    </div>
    <div className="pb-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src="/gen.jpeg" alt="Generations School" className="w-7 h-7 mr-2" />
          <div>
            <h3 className="font-semibold text-foreground">
              O-Levels (Mathematics, Sciences, Languages, Humanities)
            </h3>
            <p className="text-muted-foreground">Generations School, Pakistan</p>
            <p className="text-sm text-muted-foreground mt-1">
              Secured 10 A*s, placing in the top 0.001% nationally 
            </p>
          </div>
        </div>
        <Badge variant="outline">Aug 2019 – Jun 2021</Badge>
      </div>
    </div>
  </CardContent>
</Card>


{/* Achievements Section */}
<Card className="bg-card/50 backdrop-blur-md border-border/30">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Award className="h-5 w-5 text-primary" />
      Achievements
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">

      {/* Dean’s Honor Roll 2024–2025 */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Dean’s Honor Roll 2024–2025</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Apr 2025
          </div>
          <div className="text-sm text-muted-foreground">Recognized for achieving a GPA of 3.5+ across 24+ course units, placing in the top academic echelon of the university.</div>
        </div>
      </div>

      {/* Dean’s Research Award */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Dean’s Research Award</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Dec 2024
          </div>
          <div className="text-sm text-muted-foreground">Awarded for exemplary contributions to research on generative AI models, delivering impactful real-world results.</div>
        </div>
      </div>

      {/* University of Alberta Undergraduate Scholarship */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">University of Alberta Undergraduate Scholarship</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Sep 2024
          </div>
          <div className="text-sm text-muted-foreground">Merit-based award for maintaining a 4.0/4.0 CGPA in Computing Science while contributing to leadership initiatives.</div>
        </div>
      </div>

      {/* Dean’s Honor Roll 2023–2024 */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Dean’s Honor Roll 2023–2024</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Apr 2024
          </div>
          <div className="text-sm text-muted-foreground">Recognized for achieving a GPA of 3.5+ across 24+ course units, placing in the top academic echelon of the university.</div>
        </div>
      </div>

      {/* University of Alberta International Admission Scholarship */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">University of Alberta International Admission Scholarship</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Dec 2023
          </div>
          <div className="text-sm text-muted-foreground">Awarded to exceptional international students based on stellar high school performance and leadership potential.</div>
        </div>
      </div>

      {/* Faculty of Science Gold Standard Scholarship */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Faculty of Science Gold Standard Scholarship</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Sep 2023
          </div>
          <div className="text-sm text-muted-foreground">Entry scholarship awarded for outstanding academic achievements and exceptional potential in Computing Science.</div>
        </div>
      </div>

      {/* University of Alberta Regional Excellence Scholarship */}
      <div className="flex items-start gap-3">
        <img src="/uofa.jpeg" alt="University of Alberta" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">University of Alberta Regional Excellence Scholarship</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            University of Alberta &middot; Sep 2023
          </div>
          <div className="text-sm text-muted-foreground">Recognized as one of the top-performing students from the region for exemplary academic and extracurricular performance.</div>
        </div>
      </div>

      {/* Academic Distinction with the Highest Honor */}
      <div className="flex items-start gap-3">
        <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Academic Distinction with the Highest Honor</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Jun 2023
          </div>
          <div className="text-sm text-muted-foreground">One of only 5 students out of 2,000 to earn A*s in all subjects with a challenging 5-subject course load.</div>
        </div>
      </div>

      {/* Dean's List */}
      <div className="flex items-start gap-3">
        <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Dean's List</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Jun 2023
          </div>
          <div className="text-sm text-muted-foreground">Name inscribed in Dean's List of Nixor College for excellence in academics.</div>
        </div>
      </div>

      {/* Honor Roll */}
      <div className="flex items-start gap-3">
        <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Honor Roll</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Jun 2023
          </div>
          <div className="text-sm text-muted-foreground">Name inscribed in Honor Roll by Nixor College for excellence in academics.</div>
        </div>
      </div>

      {/* Habib Meritorious Award */}
      <div className="flex items-start gap-3">
        <img src="/habib.jpg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Habib Meritorious Award</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Jan 2023
          </div>
          <div className="text-sm text-muted-foreground">Presented at Habib University's 10th Annual Awards Ceremony for outstanding academic achievement.</div>
        </div>
      </div>

      {/* Academic Excellence - Maximum Achievable result with 5 As */}
      <div className="flex items-start gap-3">
        <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Academic Excellence — Maximum Achievable Result with 5 As</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Dec 2022
          </div>
          <div className="text-sm text-muted-foreground">Awarded for achieving A's in all AS-level subjects; one of three students to attain the maximum result with 5 subjects.</div>
        </div>
      </div>

      {/* Hypercube and Scinnova National Science Olympiads */}
      <div className="flex items-start gap-3">
        <img src="/sc.jpg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Hypercube and Scinnova National Science Olympiads</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Sep 2022
          </div>
          <div className="text-sm text-muted-foreground">Overall Winner at Hypercube and Runner-Up at Scinnova; earned top honors in 5+ individual modules.</div>
        </div>
      </div>

      {/* International Mathematics Olympiad (IMO) */}
      <div className="flex items-start gap-3">
      <img src="/imo.png" alt="IMO" className="w-7 h-7 mt-1" />
      <div>
        <div className="font-semibold text-foreground">International Mathematics Olympiad (IMO) — National Team Shortlist</div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          Pakistan Mathematical Olympiad &middot; 2022
        </div>
        <div className="text-sm text-muted-foreground">
          Selected as one of Pakistan’s top 10 candidates; National Math Talent Contest winner; completed two week-long IMO training camps in advanced problem solving.
        </div>
      </div>
      </div>

      {/* International Kangaroo Mathematics Competition */}
      <div className="flex items-start gap-3">
        <img src="/ikmc.svg" alt="IKMC" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">International Kangaroo Mathematics Competition</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Generation's School &middot; Sep 2022
          </div>
          <div className="text-sm text-muted-foreground">Three-time Bronze Medalist for consistent excellence in mathematical problem-solving (2017, 2019, 2022).</div>
        </div>
      </div>

      {/* Fully-funded A Level Scholarship */}
      <div className="flex items-start gap-3">
        <img src="/nixor.jpeg" alt="Nixor College" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Fully-funded A Level Scholarship</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            Nixor College &middot; Aug 2021
          </div>
          <div className="text-sm text-muted-foreground">Full scholarship on basis of O Level grades – 10 A*s.</div>
        </div>
      </div>

      {/* Your World Global Competition Finalist (British Council) */}
      <div className="flex items-start gap-3">
        <img src="/bc.png" alt="British Council" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Your World Global Competition Finalist</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            British Council &middot; 2021
          </div>
          <div className="text-sm text-muted-foreground">Recognized as a global finalist after winning the national round of the British Council's "Your World" competition.</div>
        </div>
      </div>

      {/* Arizona State University’s International Science and Engineering Award */}
      <div className="flex items-start gap-3">
        <img src="/asu.png" alt="ISEF" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Arizona State University’s International Science and Engineering Award</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            ISEF &middot; May 2019
          </div>
          <div className="text-sm text-muted-foreground">Best of Category: Engineering Mechanics; selected from 18,00+ projects from worldwide; received a merit-based scholarship</div>
        </div>
      </div>
      
      {/* Grand Winner — Shaukat Khanum National Science & Engineering Fair */}
      <div className="flex items-start gap-3">
        <img src="/isef.jpeg" alt="Shaukat Khanum National Science & Engineering Fair" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">Grand Winner — Shaukat Khanum National Science & Engineering Fair</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            SK National Science & Engineering Fair · 2019
          </div>
          <div className="text-sm text-muted-foreground">Grand Winner among 200+ projects; qualified to represent Pakistan at ISEF 2019 (USA).</div>
        </div>
      </div>

      {/* World Robot Olympiad (WRO) National Winner */}
      <div className="flex items-start gap-3">
        <img src="/wro.jpeg" alt="WRO" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">World Robot Olympiad (WRO) National Winner</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            WRO &middot; 2019
          </div>
          <div className="text-sm text-muted-foreground">Won national championship; represented Pakistan at the World Robot Olympiad in Hungary.</div>
        </div>
      </div>

      {/* FIRST LEGO League (FLL) Regional Champion */}
      <div className="flex items-start gap-3">
        <img src="/fll.png" alt="FIRST LEGO League" className="w-7 h-7 mt-1" />
        <div>
          <div className="font-semibold text-foreground">FIRST LEGO League (FLL) Regional Champion</div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            FLL &middot; 2019
          </div>
          <div className="text-sm text-muted-foreground">Triumphed in regionals for innovative robotics design, programming, and teamwork; qualified for nationals.</div>
        </div>
      </div>

    </div>
  </CardContent>
</Card>


        {/* Hobbies & Interests Section */}
        <Card className="bg-card/50 backdrop-blur-md border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Hobbies & Interests
            </CardTitle>
            <CardDescription>What I enjoy doing in my free time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sports & Fitness */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Sports & Fitness
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Football — Team sports enthusiast
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Gym & Fitness — Regular workout routine
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Hiking — Exploring nature trails
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Cricket — Weekend league & nets
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Badminton — Casual singles & doubles
                  </div>
                </div>
              </div>

              {/* Arts & Creativity */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Arts & Creativity
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Guitar — Playing and practice
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    3D Printing — Designing & prototyping
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Painting — Acrylic & digital
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Baking & Cooking — Experimenting with recipes
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Chess — Strategy & tactics
                  </div>
                </div>
              </div>

              {/* Tech & Learning */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tech & Learning
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    AI/ML Research — Exploring latest developments
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Technical Projects — Applying skills practically
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Tech Communities — Networking and mentoring
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
                    Continuous Learning — Always exploring new skills
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default About;