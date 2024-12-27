import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  uoft,
  github,
  google,
  python,
  ibm,
  blackimage,
  waterloouni,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Honours Bachelors of Science Statistics (H. BSc)",
    company_name: "University of Toronto",
    icon: uoft,
    iconBg: "#fff",
    date: "Sept. 2023- Present",
    points: [
      "Notable Courses:  Computer Science I (Python Focused), Computer Science II (C focused), Multivariable Calculus I & II, Introduction to Data Science, Linear Algebra I & II, Introduction to Probability."
    ]
    ,
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
];



const experiences = [
  {
    title: "Machine Learning Bootcamp Candidate",
    company_name: "University of Toronto",
    icon: uoft,
    iconBg: "#fff",
    date: "Sept. 2024 - Present",
    points: [
      "Acquired hands-on experience with Pandas framework in Python for data preprocessing and data visualization",
      "Attained greater insight into modeling techniques such as supervised learning, semi-supervised learning, and reinforcement learning",
  ],
  },
  {
    title: "Hacker",
    company_name: "Waterloo Universtiy",
    icon: waterloouni,
    iconBg: "#fff",
    date: "May 2024",
    points: [
      "Leveraged Google APIs such as Vertex AI and Gemini to create an advanced AI riddle-solving bot",
      "Implemented machine learning techniques, including supervised learning and fine-tuning, to train the AI model",
    ],
  },
];

const extracurricular = [
  {
    title: "Prompt Design in Vertex AI",
    type: "Google Cloud",
    icon: google,
    iconBg: "#000000",
    date: "Issued June 2024 ",
    points: ["Prompt engineering, Image analysis, and Multimodal Generative Techniques"],
    credential: "https://www.credly.com/badges/5f1b7e59-62f8-4091-8305-8cb295a5f63f/linked_in_profile",
  },
  {
    title: "Getting Started with Data" ,
    type: "IBM SkillsBuild",
    icon: ibm,
    iconBg: "#FFFFFF",
    date: "Issued June 2024",
    points: ["Big data, the Data Analytics process, Data Visualization, and the Data Science landscape"],
    credential: "https://www.credly.com/earner/earned/badge/b621bb79-64e5-4665-8a9c-f57e032d4d6a",
  }
];

const projects = [
  {
    name: "Under Work",
    description:
      "...",
    tags: [
      {
        name: "...",
        color: "...",
      }
    ],
    image: blackimage,
    source_code_link: "https://github.com/rayaanxsyed",
    live_project_link: "https://github.com/rayaanxsyed",
  },
  {
    name: "Under Work",
    description:
      "...",
    tags: [
      {
        name: "...",
        color: "...",
      }
    ],
    image: blackimage,
    source_code_link: "https://github.com/rayaanxsyed",
    live_project_link: "https://github.com/rayaanxsyed",
  },
  {name: "Under Work",
    description:
      "...",
    tags: [
      {
        name: "...",
        color: "...",
      }
    ],
    image: blackimage,
    source_code_link: "https://github.com/rayaanxsyed",
    live_project_link: "https://github.com/rayaanxsyed",
  }
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education
};
