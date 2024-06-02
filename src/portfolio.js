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
  username: "Ashutosh Kumar",
  title: "Hi, I'm Ashutosh Kumar",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Spring Boot, Java / Python / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gr46BsFR27sMRGxgk5kVq2gO2YuoGhIe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/stars/kashutoshswe/",
  linkedin: "https://www.linkedin.com/in/ashutoshkumarlink/",
  gmail: "ashutoshkumarbook@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Design and Develop Applications, Eager and Excited to learn multiple tech stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Symbiosis International (Deemed) University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Applications",
      duration: "May 2019 - May 2021",
      desc: "Gold Medalist. Took courses about Software Architectures, Data Mining, NoSQL",
      descBullets: [
        "Technical Team Lead - ACM SICSR",
        "Chief Editor of ACM SICSR"
      ]
    },
    {
      schoolName: "Symbiosis International (Deemed) University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Computer Applications",
      duration: "July 2016 - May 2019",
      desc: "Gold Medalist. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Chair - IEEE Student Branch",
        "gnuNify Organiser"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Data",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Technical Lead",
      company: "BluePi",
      companylogo: require("./assets/images/bluepilogo.png"),
      date: "January 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Designed and developed multiple micro-services for monitoring post-trade activities to improve resolution time by 30%",
        "Developed real-time trade analytics dashboard while leading a team of 3 members",
      ]
    },
    {
      role: "Senior Engineer - Application",
      company: "BluePi",
      companylogo: require("./assets/images/bluepilogo.png"),
      date: "January 2023 – January 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a real-time analytics dashboard for India's Largest Foodservice company",
        "Implemented RBAC, Authentication with SSO, worked with JWT tokens",
        "Developed the backend ecosystem for an initiative by Government of India for Indian citizens Mobile Security and Privacy issues.",
      ]
    },
    {
      role: "Application Development Engineer",
      company: "BluePi",
      companylogo: require("./assets/images/bluepilogo.png"),
      date: "November 2021 – January 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Increased profit margin by 50% for the customer by developing real-time marketing automation platform",
        "Developed APIs, implemented Pub/Sub Model & integrated multiple services with AWS",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Cool Stuff which I love to build whenever I get some time",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Food Recipe App",
      projectDesc: "Search using an incredient and get recipes",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/kashutoshswe/cookingFood"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Automated QR Code Based System",
      projectDesc: "Automated QR Code Based System for Employees for Tara Mobile Creches NGO",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://taramobilecreches.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Employee of the Quarter",
      subtitle:
        "Awarded as the employee of the Quarter for January 2023-March 2023",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "BluePi",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Best Emerging Student Branch of the year 2019, India",
      subtitle:
        "Awarded as the Best Emerging Student Branch of the year, 2019 among 12 sections and 600+ student branches in India",
      image: require("./assets/images/ieee.png"),
      imageAlt: "IEEE",
      footerLink: [
        {
          name: "IEEE Student Branch",
          url: "https://edu.ieee.org/in-sicsr/outstanding-emerging-student-branch-under-ieee-india-council-awards-2021-2/"
        }
      ]
    },

    {
      title: "Student Chair of the year, 2019, Pune Section",
      subtitle: "Awarded as the Student Chair of the year, 2019 among 40+ student branches in Pune Section",
      image: require("./assets/images/ieee.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "IEEE Student Chair",
          url: "https://edu.ieee.org/in-sicsr/ieee-pune-section-student-chair-professional-of-the-year-2019-award/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/acm-sicsr/the-dreams-which-got-wings-acm-student-chapter-sicsr-4aa2e881b022",
      title: "The Dreams Which Got Wings!",
      description:
        " It started with the curiosity of students to have an ACM Chapter at our college",
    },
    {
      url: "https://medium.com/@ashutoshkumarbook/cancer-end-of-a-story-2510f6a87238",
      title: "Cancer - End of Story",
      description:
        "No Shave November Support",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

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
  number: "+91-0000000000",
  email_address: "ashutoshkumarbook@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
