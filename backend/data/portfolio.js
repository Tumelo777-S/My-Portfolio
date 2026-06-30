const profile = {
  name: "Tumelo Mphahlele",
  title: "Software Developer Learnership Intern",
  subtitle: "Software Developer & Full-Stack Engineer",
  tagline: "Software Developer Learnership Intern | Full-Stack Developer",
  location: "Johannesburg, South Africa",
  city: "Johannesburg, South Africa",
  age: 21,
  phone: "+27 63 165 7705",
  email: "tmlmphhll@gmail.com",
  degree: "Bachelor of Computer Science and Informatics",
  address: "11A Stafford Street, Auckland Park, Johannesburg, 2001",
  instagram: "https://www.instagram.com/uncle__.tumi/",
  linkedin: "https://www.linkedin.com/in/tumelo-mphahlele-78279833a/",
  profileImage: "/img/Tumelo.png",
  heroImage: "/img/IMG_TM_MPHAHLELE.jpg",
  aboutImage: "/img/Tumelo.png",
};

const about = {
  bio: `I am a dedicated Computer Science and Informatics student at the University of Johannesburg with a strong passion for software development, problem-solving, and creating practical applications. I have gained valuable industry experience through a Software Developer Learnership at JBS Solutions.

With a focus on continuous growth and hands-on learning, I was recognized as Top Programming Talent at the JBS Gritlab Africa Bootcamp 2024. My technical skills include C#, ASP.NET Core, Java, Python, SQL, JavaScript, Bootstrap, and WCF Services. I enjoy developing full-stack solutions and turning concepts into working systems.

Beyond coding, I bring strong collaboration, analytical thinking, and adaptability skills. I approach challenges with courage and determination in all my work.

I'm always open to connecting with like-minded professionals, mentors, and opportunities in the technology industry.`,
  skills: [
    { name: "C#", level: 92 },
    { name: "ASP.NET Core", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 80 },
    { name: "Python", level: 78 },
    { name: "SQL", level: 86 },
    { name: "React", level: 82 },
    { name: "Node.js", level: 75 },
    { name: "Bootstrap", level: 90 },
    { name: "WCF Services", level: 72 },
  ],
};

const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Informatics",
    period: "2022 — Present",
    school: "University of Johannesburg",
  },
  {
    id: 2,
    degree: "National Senior Certificate",
    period: "2020 — 2022",
    school: "Ngwana Mohube High School",
  },
  {
    id: 3,
    degree: "Grade 9",
    period: "2012 — 2019",
    school: "Eagles Nest Christian School, Polokwane",
  },
];

const experience = [
  {
    id: 1,
    role: "Software Developer Learnership Intern",
    period: "2025",
    company: "JBS Solutions, Johannesburg",
    bullets: [
      "Developing REST APIs and front-end components using C#",
      "Collaborating with senior developers on enterprise solutions",
    ],
  },
];

const achievements = [
  {
    id: 1,
    title: "Top Programming Talent",
    period: "2024",
    description: "JBS Gritlab Africa Bootcamp",
  },
];

const projects = [
  {
    id: 1,
    title: "Finnova",
    description:
      "Full-Stack Web Banking Application (ASP.NET, C#, Bootstrap, SQL Server)",
    image: "/img/portfolio/finnova.jpg",
    tech: ["ASP.NET", "C#", "Bootstrap", "SQL Server"],
  },
  {
    id: 2,
    title: "Re:Fill",
    description:
      "Full-Stack E-Commerce Platform (WCF, REST APIs, C#, MySQL)",
    image: "/img/portfolio/refill.jpg",
    tech: ["WCF", "REST APIs", "C#", "MySQL"],
  },
  {
    id: 3,
    title: "JBS Innovation Lab Simulation",
    description: "Interactive Motion Simulation (Unity & C#)",
    image: "/img/portfolio/unity.jpg",
    tech: ["Unity", "C#"],
  },
];

module.exports = {
  profile,
  about,
  education,
  experience,
  achievements,
  projects,
};
