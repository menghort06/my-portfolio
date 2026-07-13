import { getCurrentMapLink } from "../composables/useMap";
const mapLink = getCurrentMapLink.value;

export const personalInfo = {
  name: "HONG MENGHORT",
  photo: "",
  title: "Senior Frontend Engineer",
  aboutText:
    "I am a passionate Frontend Engineer with over 8 years of experience building high quality, responsive web interfaces. I specialize in modern JavaScript frameworks (Vue, React, Angular) and utility first styling (Tailwind CSS). My goal is to build digital products that combine beautiful, fluid design with solid engineering and optimal performance.",
  resumeUrl: "#",
  description:
    "With hands on experience in building enterprise systems and UI focused digital products, I specialize in developing scalable, maintainable, and high performance frontend solutions. I work extensively with Angular, Vue, and modern frontend ecosystems to transform complex business requirements into clean, intuitive, and accessible user interfaces. My focus is on writing structured, reusable code and delivering seamless user experiences that perform reliably across different devices and environments.",
  contacts: [
    {
      id: "1",
      title: "Phone",
      text: "093944896",
      link: "tel:093944896",
      icon: "Phone"
    },
    {
      id: "2",
      title: "Email Address",
      text: " menghort.hong@gmail.com",
      link: "mailto:menghort.hong@gmail.com",
      icon: "Mail"
    },
    {
      id: "3",
      title: "LinkedIn",
      text: "linkedin.com",
      link: "https://www.linkedin.com/in/meng-hort-550383179/",
      icon: "Linkedin"
    },
    {
      id: "4",
      title: "GitHub Repos",
      text: "github.com",
      link: "https://github.com/menghort06?tab=repositories",
      icon: "Github"
    },
    {
      id: "5",
      title: "Current Location",
      text: "Phnom Penh, Khan Russey Keo, Sangkat Svay Pak",
      link: mapLink,
      icon: "MapPin"
    }
  ],
  details: [
    {
      description: `With hands on experience building enterprise systems and user focused digital products, I specialize in developing scalable, maintainable, and high performance web applications that solve real business challenges. My expertise spans Angular, Vue, React, Javascript , TypeScript, and modern frontend ecosystems, enabling me to transform complex requirements into intuitive, accessible, and engaging user experiences.`
    },
    {
      description: `I am passionate about clean code, maintainable architecture, and continuous improvement. Whether optimizing application performance, improving accessibility, refining user journeys, troubleshooting critical issues, or introducing new technologies and development practices, I focus on delivering solutions that are reliable, scalable, and easy to evolve over time.`
    },
    {
      description: `Having worked across industries including education, insurance, POS, mapping, realtime communication, and government platforms, I am comfortable navigating complex business domains and quickly adapting to new challenges. I bring a strong problem solving mindset, attention to detail, and a commitment to building products that not only function well but also provide exceptional user experiences.`
    },
    {
      description: `My goal is to create modern digital solutions that combine technical excellence, thoughtful design, and measurable business value while continuously learning, mentoring others, and contributing to the success of the teams and organizations I work with.`
    }
  ]

};






