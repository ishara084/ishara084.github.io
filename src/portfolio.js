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
  username: "Draco The Voyager",
  title: "Hi all, I'm Ishara",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experiences on Web applications development, Big data visualizations, Data Engineering with some cool tech-stacks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ishara084",
  linkedin: "https://www.linkedin.com/in/ishara084/",
  gmail: "ishara.space@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/Dragon.Space/",
  instagram: "https://www.instagram.com/draco_the_voyager/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A CRAZY FULL STACK DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop highly interactive (Front end / User Interfaces) web applications"
    ),
    emoji("⚡ Full-stack web application development"),
    emoji(
      "⚡ Cloud infrastructure management, CICD pipelines"
    ),
    emoji(
        "⚡ ETL, Data pipeline, Big data visualization"
    ),
    emoji(
        "⚡ Data Engineering, ML pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // eslint-disable-next-line no-sparse-arrays
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "D3.js",
      fontAwesomeClassname: "fas fa-map-location-dot"
    },
    {
      skillName: "Chart.js",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utah State University",
      logo: require("./assets/images/usu.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2024 - April 2026(Readying)"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Cardiff Metropolitan University",
      logo: require("./assets/images/cardiff.png"),
      subHeader: "Master of Science in Data Science",
      duration: "2022 - 2024"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Colombo School of Computing",
      logo: require("./assets/images/uoc.png"),
      subHeader: "Bachelor of Science in Information System",
      duration: "February 2016 - March 2019"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud",
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
      role: "Graduate Research Assistant",
      company: "ASPIRE Research Center",
      companylogo: require("./assets/images/aspire.png"),
      date: "Aug 2024 – May 2026",
      desc: "Electrified transit infrastructure monitoring system",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    },
    {
      role: "Full-stack Developer",
      company: "Wiley",
      companylogo: require("./assets/images/logo_wiley.png"),
      date: "Jan 2021 – August 2024",
      desc: "Worked on multiple enterprise products in education domain"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    },
    {
      role: "Full-stack Developer/Backend Engineer",
      company: "Eyepax",
      companylogo: require("./assets/images/logo_eyepax.png"),
      date: "June 2019 – Dec 2021",
      desc: "Implemented multiple dynamic & mission-critical web applications, features in various business domains(LMS, PMS, RMS, etc) that span across globally.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo_bodyexo.png"),
      projectName: "BodyExo",
      projectDesc:
        "BodyExo Stretch captures body composition data, analysis with data visualization and delivers subscriptions to gymnasiums, premium programs, and enhanced personalization of the member journey.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bodyexo.com//"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo_zuzu.png"),
      projectName: "ZUZU Hospitality Solutions",
      projectDesc:
        "ZUZU Hospitality Solutions provides a All-in-One Hotel Solution(PMS, Booking engine, Marketing analytics, Revenue management etc.)  to small-medium hotels, delivering revenue growth through distribution and revenue management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zuzuhospitality.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_promeister.png"),
      projectName: "ProMeister Academy",
      projectDesc:
        "ProMeister Academy, A complete learning management system (LMS) delivers education to the entire automotive industry. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://promeister.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_ac.png"),
      projectName: "Advancement Courses",
      projectDesc:
        "Advancement Courses is a Moodle-based application that offers more self-paced recertification and salary advancement courses for teachers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.advancementcourses.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_edge.jpg"),
      projectName: "Wiley Edge",
      projectDesc:
        "Wiley Edge is a complete LMS platform that bridge the skills gap in technology and other high-demand disciplines by connecting education to the working world",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.wiley.com/edge/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Professional Qualification 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified Solutions Architect – Associate",
      subtitle: "Certified AWS Solutions Architect Associate",
      image: require("./assets/images/logo_aws_associate.png"),
      imageAlt: "Certified Solutions Architect – Associate",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/ef0b0354-27b2-46e7-980f-780a95f0e2ba/public_url"
        }
      ]
    },
    {
      title: "Certified SAFe® 5 Agilist",
      subtitle:
        "A Certified SAFe® 5 Agilist is a SAFe enterprise leadership professional who is part of a Lean-Agile transformation",
      image: require("./assets/images/logo_safe.png"),
      imageAlt: "Certified SAFE Agilist logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/0a81be98-331c-464b-9fae-1d00560b4355"
        }
      ]
    },
    {
      title: "Certified SAFe® 5 Product Owner/Product Manager",
      subtitle:
        "Completed Certification from Scaled Agile Inc for certified PO/PM",
      image: require("./assets/images/logo_popm.png"),
      imageAlt: "Certified SAFE PO/PM logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/5e1a89c4-860a-444c-be26-a317f4bf6b95"
        }
      ]
    },
    {
      title: "Fundamentals of digital marketing",
      subtitle:
        "Master the basics of digital marketing with our GDG course accredited by Interactive Advertising Bureau Europe and The Open University. ",
      image: require("./assets/images/googlegarage.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // }
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
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://techshacks.com/",
      title: "Tech-Shacks",
      description:
        "One of my blogging site for writing articles related to variety of tech stuff."
    },
    {
      url: "https://draco-the-voyager.hashnode.dev/",
      title: "Hashnode",
      description: "Checkout my #hasdnode"
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://podcast.lk/"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "ishara.space@gmail.com"
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
  isHireable
};
