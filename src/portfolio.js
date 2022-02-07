/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mansoor Hussain",
  title: "Hi all, I'm Hussain",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dawVayM52QO1_tKYJOJonmB66woWTpcm/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hussainmansoor876",
  linkedin: "https://www.linkedin.com/in/mansoor-hussain-28b97815b/",
  gmail: "hussainmansoor876@gmail.com",
  gitlab: "https://gitlab.com/mansoor876",
  facebook: "https://www.facebook.com/hussainmansoor876",
  stackoverflow: "https://stackoverflow.com/users/13417349/mansoor-rajput",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop High-Performance Application Servers"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / GCP"
    )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal Urdu university",
      logo: require("./assets/images/federal.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "March 2017 - April 2021",
      desc: "The Federal Urdu University of Arts, Science and Technology; alternatively known as FUUAST is a public university primarily located Islamabad, Pakistan. The university has two satellite campuses; the central campus is located in Islamabad while the secondary campus is located in Karachi. "
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Entrolics-llc",
      companylogo: require("./assets/images/context.png"),
      date: "August 2020 – Present",
      desc:
        "Entrolics LLC is a highly qualified professional services company supporting valued customers in government and commercial organizations.",
      descBullets: []
    },
    {
      role: "Software Engineer",
      companylogo: require("./assets/images/upperLevel.jpg"),
      company: "Upper Level Sweeps",
      desc: "Upper Level Sweeps is an online Gaming Platform company supporting valued customers in multiple games.",
      date: "Feb 2021 – March 2021",
      descBullets: []
    },
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/context.png"),
      projectName: "Context",
      projectDesc: "Context is a highly qualified professional services company supporting valued customers in government and commercial organizations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://context-2my7afm7yq-ue.a.run.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/247international.png"),
      projectName: "247 IT International",
      projectDesc: "We are an expert-level IT recruitment company motivated by the rapid global growth of the technology based industry. We specialise in the placement of IT based roles to the world’s top organisations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://247itinternational.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/upperLevel.jpg"),
      projectName: "Upper Level Sweeps",
      projectDesc: "Upper Level Sweeps is an online Gaming Platform company supporting valued customers in multiple games.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.upperlevelsweeps.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo.svg"),
      projectName: "Cash Transfer App",
      projectDesc: "Cash Transfer App is an online Payment Getway. It is use for Send, Receive and Withdraw money by using email.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cash-transfer.herokuapp.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-dark.png"),
      projectName: "WSR (Wood Square Realty)",
      projectDesc: "WSR (Wood Square Realty) App is the new way of buying or selling real estate.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://wsr-hermes-frontend.herokuapp.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/smart-profile.png"),
      projectName: "Smart Profile",
      projectDesc: "Smart Profile App is the new way of sharing their profiles.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://smartprofile876.herokuapp.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo.svg"),
      projectName: "Tenstat",
      projectDesc: "Tenstat App is the new way of playing Tennis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tenstat.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/keep.jpeg"),
      projectName: "Keep In Touch",
      projectDesc: "Keep In Touch App is used for sending wishes to their loved.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.2keepintouch.com"
        }
        //  you can add extra buttons here.
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3022838789",
  email_address: "hussainmansoor876@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
