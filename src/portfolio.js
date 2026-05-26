/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "K S ",
  title: "Hi all, I'm Kirti",
  subTitle: emoji(
    "A passionate btech cse-ai student at banasthali vidyapeeth ."
  ),
  resumeLink:
    "https://forms.gle/KbhZo4WKBvjBr6MbA", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/psidks2412-jpg?tab=overview&from=2025-12-01&to=2025-12-31",
  linkedin: "https://www.linkedin.com/in/kirti-sharma-5877963a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  gmail: "psidks2412@gmail.com",
  instagram: "https://www.instagram.com/_._ks07?igsh=MWthdm8yY21xMXhqaQ==",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AN ASPIRING STUDENT WHO WANTS TO CONTRIBUTE IN FIELD OF COMPUTERS",
  skills: [
    emoji("Programming Languages:- C (Basics), Python (Beginner), HTML & CSS (Basic), SQL (Basic)"),
    emoji("⚡Core Concepts:- Data Structures & Algorithms (Beginner), Problem Solving, Object-Oriented Programming (Basic), Programming Fundamentals"),
    emoji( "⚡ Areas of Interest:- Open Source Web Development, UI/Graphic Design, Python Development" )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
      {skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BANASTHALI VIDYAPEETH University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science with specialization in artificial intelligence",
      duration: "july 2025 - july 2029",
      desc: ".",
      descBullets: [
        "",
        ""
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Canva & Adobe Photoshop",
      progressPercentage: "90%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Participated in AI-summit at BV",
      subtitle:
        "India AI Impact Pre-Summit – Centre for Artificial Intelligence, Banasthali Vidyapeeth.",
 
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1a0l1XWNVa0Kise38SC86Fxamr0WndfbD/view?usp=sharing"
        },
        
      ]
    
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


// Talks Sections


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8860108378",
  email_address: "psidks2412@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS I HAVE BUILT",
  projects: [
    {
      projectName: "Calculator in C",
      projectDesc:
        "A basic calculator program in C that performs arithmetic operations like addition, subtraction, multiplication, and division.",
      footerLink: [
        {
          name: "View Project",
          url: "#",
        },
      ],
    },

    {
      projectName: "Student Grading System in C",
      projectDesc:
        "A C program that calculates student grades and displays performance based on marks entered by the user.",
      footerLink: [
        {
          name: "View Project",
          url: "#",
        },
      ],
    },

    {
      projectName: "Expense Tracker in C",
      projectDesc:
        "A simple expense tracking system in C to record and manage daily expenses efficiently.",
      footerLink: [
        {
          name: "View Project",
          url: "#",
        },
      ],
    },

    {
      projectName: "Snake and Ladder Game in C",
      projectDesc:
        "A console-based Snake and Ladder game developed in C using loops, conditions, and random number generation.",
      footerLink: [
        {
          name: "View Project",
          url: "#",
        },
      ],
    },

    {
      projectName: "Number System Conversion in C",
      projectDesc:
        "A C project that converts numbers between binary, decimal, octal, and hexadecimal systems.",
      footerLink: [
        {
          name: "View Project",
          url: "#",
        },
      ],
    },
  ],
  display: true,
};
const blogSection = {
  display: false,
};
const talkSection = {
  display: false,
};

const podcastSection = {
  display: false,
};

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
