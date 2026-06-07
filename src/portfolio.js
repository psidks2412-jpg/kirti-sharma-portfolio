/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section
const illustration = {
  animated: true 
};

const greeting = {
  username: "KS", 
  title: "Hi all, I'm Kirti",
  subTitle: emoji(
    "A passionate B.Tech Computer Science & Engineering student specializing in Artificial Intelligence at Banasthali Vidyapith."
  ),
  resumeLink: "https://forms.gle/KbhZo4WKBvjBr6MbA", 
  displayGreeting: true 
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/psidks2412-jpg?tab=overview&from=2025-12-01&to=2025-12-31",
  linkedin: "https://www.linkedin.com/in/kirti-sharma-5877963a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  gmail: "psidks2412@gmail.com",
  instagram: "https://www.instagram.com/_._ks07?igsh=MWthdm8yY21xMXhqaQ==",
  display: true 
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "An aspiring engineer dedicated to building full-stack applications, exploring artificial intelligence, and contributing to open-source software.",
  skills: [
    emoji("⚡ Programming Languages: C, Python, HTML & CSS, SQL"),
    emoji("⚡ Core Concepts: Data Structures & Algorithms, Problem Solving, Object-Oriented Programming, Programming Fundamentals"),
    emoji("⚡ Areas of Interest: Open Source Web Development, UI/Graphic Design, Python Development")
  ],
  softwareSkills: [
    { skillName: "html5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" }
  ],
  display: true 
};

// Education Section (CGPA REMOVED)
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Banasthali Vidyapith",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence)",
      duration: "July 2025 - July 2029",
      desc: "Building a strong technical foundation in computational theory, software algorithms, and intelligent engineering frameworks.",
      descBullets: [
        "Pursuing comprehensive foundational coursework in core computational systems."
      ]
    }
  ]
};

// Tech Stack Profile Proficiencies (FIXED WITH SPECIFIC TECHNOLOGIES)
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "HTML / CSS (Proficient)", progressPercentage: "85%" },
    { Stack: "Python (Intermediate)", progressPercentage: "70%" },
    { Stack: "C (Familiar)", progressPercentage: "55%" },
    { Stack: "SQL (Familiar)", progressPercentage: "50%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Intern",
      company: "Solid State Physics Laboratory (SSPL), DRDO",
      companylogo: require("./assets/images/drdo_logo.jpg"),
      date: "June 2026 - July 2026",
      desc: "Developing a full-stack internal web application to streamline HR data management and track trainee records across the facility.",
      descBullets: [
        "Designing responsive form components for seamless trainee onboarding and automated detail capturing.",
        "Implementing a secure backend architecture and database schema to safely process, update, and retrieve institutional personnel records."
      ]
    },
    {
      role: "Open Source Contributor",
      company: "Social Summer of Code (SSoC) - Season 5",
      companylogo: require("./assets/images/ssoc_logo.jpg"),
      date: "May 2026 - June 2026",
      desc: "Contributing to real-world open-source software repositories by improving codebase structure, refactoring software logic, and fixing active system issues.",
      descBullets: [
        "Collaborating with cross-functional project maintainers using Git and GitHub workflows to seamlessly merge verified pull requests."
      ]
    },
    {
      role: "Open Source Participant",
      company: "Nexus Spring Code of Summer",
      companylogo: require("./assets/images/nsoc_logo.jpg"),
      date: "May 2026 - June 2026",
      desc: "Actively engaged in developer ecosystems by maintaining public repository standards and optimizing architecture platforms.",
      descBullets: [
        "Managed public documentation, resolved open codebase queries, and contributed foundational standards for multi-developer platforms."
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "false", 
  display: false 
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Participated in AI-Summit at BV",
      subtitle: "India AI Impact Pre-Summit – Centre for Artificial Intelligence, Banasthali Vidyapith.",
      image: "", 
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1a0l1XWNVa0Kise38SC86Fxamr0WndfbD/view?usp=sharing"
        }
      ]
    }
  ],
  display: true 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

// Contact Details (PHONE NUMBER COMPLETELY REMOVED)
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is always open!",
  number: "", // Safe and hidden!
  email_address: "psidks2412@gmail.com"
};

const twitterDetails = { userName: "twitter", display: false };
const isHireable = false; 

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE BUILT",
  projects: [
    {
      projectName: "Calculator in C",
      projectDesc: "A basic calculator program in C that performs arithmetic operations like addition, subtraction, multiplication, and division.",
      footerLink: [{ name: "View Project", url: "#" }]
    },
    {
      projectName: "Student Grading System in C",
      projectDesc: "A C program that calculates student grades and displays performance based on marks entered by the user.",
      footerLink: [{ name: "View Project", url: "#" }]
    },
    {
      projectName: "Expense Tracker in C",
      projectDesc: "A simple expense tracking system in C to record and manage daily expenses efficiently.",
      footerLink: [{ name: "View Project", url: "#" }]
    },
    {
      projectName: "Snake and Ladder Game in C",
      projectDesc: "A console-based Snake and Ladder game developed in C using loops, conditions, and random number generation.",
      footerLink: [{ name: "View Project", url: "#" }]
    },
    {
      projectName: "Number System Conversion in C",
      projectDesc: "A C project that converts numbers between binary, decimal, octal, and hexadecimal systems.",
      footerLink: [{ name: "View Project", url: "#" }]
    }
  ],
  display: true
};

const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};