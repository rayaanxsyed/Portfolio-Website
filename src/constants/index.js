import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  git,
  uoft,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  enterpriseapitester,
  github,
  mongodb,
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
    id: "skills",
    title: "Skills",
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
  },
  {
    title: "High School",
    company_name: "Richmond Hill High School, ON",
    icon: rhhs,
    iconBg: "#fff",
    date: "2018-2022",
    points: [
      "Ontario Scholar",
      "12th Grade: 96%",
      ,
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
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
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "IT Technician lll",
    company_name: "Canada's Wonderland",
    icon: wonderland,
    iconBg: "#fff",
    date: "Jun 2023 - Present",
    points: [
      "Led Tier 1-3/L3 migration and deployment for 2000+ devices on domain, ensuring seemless park-wide operations.",
      "Automated tasks with PowerShell and ConnectWise on locally hosted virtual machines.",
      "Architected Windows MDT from scratch, enabling PXE boot, and sysprepped 15+ clean volumes for scalable PC deployment.",
      "Integrated SMB file shares with ACLs, configured Print Server roles, and optimized Azure.",
      "Optimized DNS zones and DHCP failover with RSAT, leveraging subnetting for high availability.",
      "Deployed POS/KDS/Debit systems using Oracle EMC and Simphony.",
  ],
  },
  {
    title: "Software Engineer",
    company_name: "Mackenzie Health Hospital",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan 2023 - Aug 2023 (8 mos.)",
    points: [
      "Deployed 300+ iPads with JamF, enforcing HIPAA-compliant MDM.",
      "Optimized CDN and load balancing for entertainment app by over 25%* offering IPTV, VOIP, movies, games, and meal ordering.",
      "Developed NDA software with Java, Python, SQL, and integrated caching with AWS ElastiCache.",
      "Automated CI/CD workflows with GitLab CI, optimizing workflows for Citrix, VMware, VDI, Hyper-V, ESXi.",
      "Architected updates with Bash/YAML and audited stability/security of bedside apps.",
      "Monitored traffic and identified threats using Cortex XDR and Rapid7, reducing security incidents by 30%*.",
    ],
  },
  {
    title: "Junior System Administrator",
    company_name: "Privcurity Consulting Corporation",
    icon: privcurity,
    iconBg: "#1294C8",
    date: "May 2021 - Sep 2021 (5 mos.)",
    points: [
      "Scaled Azure VMs, implementing Docker/Kubernetes for containerized malware prevention and microservices.",
      "Automated cloud operations with SSH and Python scripts, optimizing data processing for MySQL databases.",
      "Secured networks with advanced firewalls, deep packet inspection via Wireshark/tcpdump.",
      "Implemented 2FA and ML-driven DDoS mitigation, cutting overhead computational cost.",
      "Built PSA systems on .NET Core/Azure, ensuring encrypted, GDPR-compliant data.",
      "Deployed Apache Kafka & Zookeeper for fault-tolerant, real-time processing, messaging, and stability.",
    ],
  },
];

const extracurricular = [
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Sep 2024",
    points: ["Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow"],
    credential: "https://www.credly.com/badges/b6f69785-2da8-447e-b02c-3350bf9af803",
  },
  {
    title: "AWS Certified Database Specialty",
    type: "Most Advanced Professional Credential",
    icon: aws,
    iconBg: "#FFFFFF",
    date: "Issued: Aug 14, 2024 | Expiry: Aug 16, 2027",
    points: ["Cloud-Native Architecture, Multi-Region Data Replication, Automated Tuning and Query Optimization, IAM, Clustering, Distributed Databases, SQL/NoSQL, Legacy Cloud Integration"],
    credential: awsdbcert,
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization"],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  },
];

const projects = [
  {
    name: "FinancialFlow 💸",
    description:
      "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/sunnypatell/financialflow",
    live_project_link: "https://financial-flow.vercel.app/",
  },
  {
    name: "Sunnify (Spotify Downloader) ♫",
    description:
      "Sunnify is a Spotify downloader webapp/desktop application that allows you to download entire playlists locally onto your Mac/Linux/Windows PC. The web version of the app is hosted on AWS Lambda and Elastic Beanstalk, with FastAPI ASGI production.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "AWS Lambda/Beanstalk",
        color: "pink-text-gradient",
      },
      {
        name: "Proxy/API",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  },
  {
    name: "Enterprise API Tester 🌐",
    description:
      "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Authentication-Body",
        color: "blue-text-gradient",
      },
    ],
    image: enterpriseapitester,
    source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
    live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  },
  {
    name: "KnifeThrow 🎯",
    description:
      "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  },
  {
    name: "COVID-19 GTA Cases Data Analysis 🧪",
    description:
      "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
    ],
    image: pythonanalysis,
    source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
    live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  },
  {
    name: "Secure Password Generator 🔐",
    description:
      "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sha-256",
        color: "green-text-gradient",
      },
      {
        name: "encryption/decryption",
        color: "pink-text-gradient",
      },
      {
        name: "data-algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: password_generator,
    source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
    live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  },
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
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
