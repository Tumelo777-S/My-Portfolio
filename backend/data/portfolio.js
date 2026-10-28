const profile = {
  name: "Tumelo Mphahlele",
  title: "Final-Year Computer Science Student",
  subtitle: "Software Developer & Full-Stack Engineer",
  tagline: "Final-Year Computer Science Student | Full-Stack Developer",
  location: "Johannesburg, South Africa",
  city: "Johannesburg, South Africa",
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

const getProfile = (today = new Date()) => {
  const birthDate = new Date(Date.UTC(2004, 1, 4));
  let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
  if (
    today.getUTCMonth() < birthDate.getUTCMonth() ||
    (today.getUTCMonth() === birthDate.getUTCMonth() &&
      today.getUTCDate() < birthDate.getUTCDate())
  ) {
    age -= 1;
  }
  return { ...profile, age };
};

const about = {
  bio: `I am a final-year Computer Science and Informatics student at the University of Johannesburg with a strong passion for software development, problem-solving, and creating practical applications. I have gained valuable industry experience through a Software Developer Learnership at JBS Solutions.

With a focus on continuous growth and hands-on learning, I was recognized as Top Programming Talent at the JBS Gritlab Africa Bootcamp 2024. My technical skills include C#, ASP.NET Core, Java, Python, SQL, JavaScript, Bootstrap, and WCF Services. I enjoy developing full-stack solutions and turning concepts into working systems.

Beyond coding, I bring strong collaboration, analytical thinking, and adaptability skills. I approach challenges with courage and determination in all my work.

I'm always open to connecting with like-minded professionals, mentors, and opportunities in the technology industry.`,
  skills: [
    { name: "C#", level: 92 },
    { name: "ASP.NET Core", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
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
  {
    id: 2,
    role: "Full-Stack Developer (Team Project)",
    period: "Academic Project",
    company: "University of Johannesburg — Team 22: Kingdom Coders",
    bullets: [
      "Built SEMS, a platform for booking and tracking film studio equipment",
      "Worked with React, Node.js, TypeScript, and PostgreSQL",
    ],
  },
];

const achievements = [
  {
    id: 1,
    title: "Top Programming Talent",
    period: "2024",
    description: "JBS Gritlab Africa Bootcamp — Overall average: 88%",
    image: "/img/Top%20Programming%20Talent.jpeg",
  },
];

const projects = [
  {
    id: 1,
    slug: "findig",
    title: "FinDig (Digital Financial Services)",
    description:
      "Digital financial services application (ASP.NET, C#, Bootstrap, SQL Server)",
    overview:
      "FinDig is a mobile-friendly banking application that brings digital financial services into a single web experience. Its deployed site describes the product as modern mobile banking and includes an installable web-app manifest, positioning the service for access across supported devices.",
    highlights: [
      "Presents a mobile-friendly digital banking experience.",
      "Includes a web-app manifest and install icons for supported devices.",
      "Connects a Bootstrap interface with an ASP.NET and C# application and a SQL Server data layer.",
    ],
    implementation:
      "The project combines an ASP.NET application written in C# with a Bootstrap-based interface and SQL Server for data storage. Its deployment also includes progressive web app metadata and device icon sizes to support installation on compatible devices.",
    image: "/img/FinDig.png",
    link: "http://splendid-shortbread-794a56.netlify.app",
    tech: ["ASP.NET", "C#", "Bootstrap", "SQL Server"],
  },
  {
    id: 2,
    slug: "refill",
    title: "Re:Fill",
    description:
      "Full-Stack E-Commerce Platform (WCF, REST APIs, C#, MySQL)",
    overview:
      "Re:Fill, presented in the video as the 4PointFusion Refill Website, is an e-commerce project centered on making eco-friendly refill shopping convenient. The walkthrough opens on a Re:Fill storefront with product imagery and a message about choosing refill products, then shows the website's sign-in interface. Together, the screens demonstrate both the shopping-facing presentation and an account entry point.",
    highlights: [
      "A storefront presentation for an eco-friendly refill shopping experience.",
      "Product imagery and copy introduce the refill products to shoppers.",
      "The walkthrough also shows an account sign-in screen.",
      "The project is presented as a full-stack e-commerce website.",
    ],
    implementation:
      "The portfolio's listed stack is C#, WCF, REST APIs, and MySQL. These technologies form the application's code, service interfaces, and data layer. The video walkthrough (17 minutes) demonstrates the Re:Fill storefront and sign-in interface; this description sticks to behavior visible in the walkthrough rather than assuming unshown checkout or payment features.",
    image: "/img/ReFIll.png",
    link: "https://www.youtube.com/watch?v=CoypCC-uja4&t=54s",
    tech: ["WCF", "REST APIs", "C#", "MySQL"],
  },
  {
    id: 3,
    slug: "jbs-innovation-lab-simulation",
    title: "JBS Innovation Lab Simulation",
    description: "Interactive Motion Simulation (Unity & C#)",
    overview:
      "The JBS Innovation Lab Simulation is an interactive motion-simulation project built with Unity and C#. It presents simulation environments as interactive digital spaces and includes separate Lab and Kitchen demonstrations, allowing each scenario to be explored independently.",
    highlights: [
      "Interactive motion simulation built with Unity and C#.",
      "Includes separate Lab and Kitchen simulator demonstrations.",
      "Uses distinct environments to present and explore each simulation scenario.",
    ],
    implementation:
      "Unity provides the real-time simulation environment, while C# is used to implement the project behavior. The portfolio includes video demonstrations for both the Lab and Kitchen scenarios.",
    image: "/img/GLA_Workshop.png",
    tech: ["Unity", "C#"],
    demos: [
      { label: "Lab", video: "/img/Labs.mp4" },
      { label: "Kitchen", video: "/img/Kitchen.mp4" },
    ],
  },
  {
    id: 4,
    slug: "sems",
    title: "SEMS — Studio Equipment Management System",
    description: "Team-built platform for booking and tracking film studio equipment.",
    overview:
      "SEMS (Studio Equipment Management System) is a web and mobile platform created by the four-student Kingdom Coders team for film equipment booking at the University of Johannesburg. It replaces paper-based studio reservations with a shared workflow: equipment bookings are linked to approved projects, availability is coordinated to prevent double bookings, and equipment condition can be followed as it changes.",
    highlights: [
      "Replaces paper-based film-equipment booking with a web and mobile platform.",
      "Coordinates reservations to help prevent two approved bookings for the same equipment at the same time.",
      "Tracks equipment status and damage in real time.",
      "Connects every booking to an approved project.",
      "Was built by Kingdom Coders for the University of Johannesburg film-equipment workflow.",
    ],
    implementation:
      "The team presentation and Projects Day page describe SEMS as a coordinated booking and equipment-tracking platform, rather than a general-purpose inventory list. Kingdom Coders developed it with React, Node.js, TypeScript, PostgreSQL, and Docker. The frontend, backend, relational database, and container tooling work together to support the booking workflow. The team consists of Ovayo Ntebe, Nkazimulo Dube, Mbofheni Junior Makhavhu, and Tumelo Mphahlele.",
    image: "/img/SEMS.png",
    link: "https://adam.uj.ac.za/projectsday/?page=projects&type=teams&no=22",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 5,
    slug: "fake-medication-detector",
    title: "FakeMedicationDetector",
    description:
      "Java app comparing medicine-image features with graph algorithms to flag counterfeits.",
    overview:
      "FakeMedicationDetector is a Java desktop application built as a Computer Science 3A mini project to explore graph-based analysis of counterfeit medicine packaging. A user loads a labeled dataset of genuine and counterfeit medicine images, then selects a packaging or pill image to check. The application extracts visual features, compares the image against the dataset, and returns an Authentic or Fake classification. Its landing page documents a dataset of 421 authentic and 241 counterfeit samples.",
    highlights: [
      "Imports labeled reference images from separate Real and Fake folders; the documented dataset contains 421 authentic and 241 counterfeit samples.",
      "Accepts medicine packaging or pill images in JPG and PNG formats.",
      "Divides images into regions, extracts colour histograms and features, then connects the five most colour-similar regions in a K-nearest-neighbour graph.",
      "Uses cosine similarity to compare records and a majority vote among the five closest records to classify an image as Authentic or Fake.",
      "Includes a sample-image gallery, a runnable JAR, source-code setup instructions, and an eight-minute system presentation on its landing page.",
    ],
    implementation:
      "The documented pipeline is dataset loading, image upload, graph construction, similarity comparison, and verdict generation. For the classification, image regions become graph nodes and their colour similarity determines edges; the nearest database records vote on the result. The application also demonstrates Dijkstra's algorithm to find a lowest-cost path between selected nodes, Kruskal's algorithm to build a minimum spanning tree, and breadth-first search to count connected components. The landing page notes custom HashMap, LinkedList, Stack, Queue, and Heap data structures. The desktop app runs offline and requires Java 17+ and JavaFX 21; the published JAR was tested with Java 25.",
    image: "/img/FakeMedDetector.png",
    link: "https://fake-medicine-detector-0y9x.onrender.com",
    tech: [
      "Java",
      "JavaFX 21",
      "KNN Graph",
      "Cosine Similarity",
      "Kruskal's MST",
      "BFS",
      "Dijkstra's Algorithm",
    ],
  },
];

module.exports = {
  profile,
  getProfile,
  about,
  education,
  experience,
  achievements,
  projects,
};
