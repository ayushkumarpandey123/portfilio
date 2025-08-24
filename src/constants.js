// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.jpeg';
import vpsLogo from './assets/education_logo/vps_logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.jpg';
import csprepLogo from './assets/work_logo/cs_prep.jpg';
import movierecLogo from './assets/work_logo/movie_rec.jpg';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "KLH University",
      date: "July 2022 - Present",
      grade: "90.7%",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (Honors) from K L University, Hyderabad. Throughout my studies, I have explored areas such as Data Structures and Algorithms, Web Development, Database Management Systems, and Cybersecurity. This journey has enabled me to apply theoretical knowledge to real-world projects, enhancing my problem-solving skills and giving me practical experience in building secure and efficient software solutions.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Sri Chaitanya Jr College",
      date: "June 2019 - June 2021",
      grade: "86.4%",
      desc: "I completed my Class 12 education from Sri Chaitanya Jr College, Vijayawada, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - with PCM ",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Sri Chaitanya International Olympaid School",
      date: "March 2018 - March 2019",
      grade: "72.01%",
      desc: "I completed my Class 10 education from Sri Chaitanya International Olympiad School, Vijayawada, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Farm To Table",
      description:
        "Promoted local produce and sustainability by supporting the farm-to-table movement, focusing on reducing food miles and encouraging eco-friendly consumption.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Flask", "Django", "MySQL", "Bootstrap", "Python"],
      github: "https://github.com/ayushkumarpandey123/Python-Project",
    },
    {
      id: 1,
      title: "Attendance Using Facial Recognition ",
      description:
        "Engineered intelligent solutions for automated attendance, ensuring accurate identity verification, preventing proxies, and streamlining tracking. Improved efficiency and reliability across schools, offices, and events.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "Flask", "Django", "MySQL", "Pandas", "OpenCV", "Python"],
      github: "https://github.com/ayushkumarpandey123/Attendance-Using-Facial-Recognition-",
    },
    {
      id: 2,
      title: "V-Vendor",
      description:
        "Developed a platform to streamline procurement by enabling direct supplier purchases, real-time order tracking, and data-driven recommendations. Enhanced efficiency in raw material sourcing and optimized overall supply chain processes.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/ayushkumarpandey123/V-Vendor",
    },
    {
      id: 3,
      title: "Smart Library System with Payment Integration ",
      description:
        "Built a smart library system with seamless book browsing, borrowing, and management features, integrated with secure payment solutions for fines, subscriptions, and premium services to enhance user experience and efficiency.",
      image: npmLogo,
      tags: ["HTML", "CSS", "Java", "Servlets & JSP","Apache Tomcat", "Maven", "MySQL"],
      github: "https://github.com/ayushkumarpandey123/Library-Management-System",
    },
    {
      id: 4,
      title: "WorkHub: The Smart Solution for Workforce Administration ",
      description:
        "Designed an employee management system with secure authentication, password encryption, image upload, and efficient CRUD operations. Streamlined administration and improved accuracy in managing employees and categories.",
      image: taskremLogo,
      tags: ["JavaScript", "React JS", "HTML", "CSS", "Node.js", "Express.js", "MySQL", "JWT Authentication", "Password Encryption"],
      github: "https://github.com/ayushkumarpandey123/Employee-Management-System",
    },
  ];  