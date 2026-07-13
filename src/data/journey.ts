import { JourneyEvent } from '../types/journey';

export const journeyEvents: JourneyEvent[] = [
  {
    id: 'w1',
    year: '2023',
    type: 'work',
    title: 'Senior Frontend Engineer & Acting Frontend Manager',
    organization: 'Ecoinsoft Solution',
    period: '2023 – Present',
    icon: 'Briefcase',
    description:
      'Led frontend development initiatives across enterprise projects, assumed technical ownership during team transitions, and mentored junior and mid-level developers. Designed scalable architectures, delivered reusable component systems, and collaborated with stakeholders to align technical solutions with business goals.',
    responsibilities: [
      "Led frontend development initiatives and assumed ownership of projects during team transitions, ensuring successful delivery and continuity.",
      "Designed scalable frontend architectures and provided technical solutions for complex business requirements.",
      "Developed core application features, reusable components, and dynamic templates to accelerate development and reduce code duplication.",
      "Collaborated with stakeholders, business teams, and designers to gather requirements, conduct project demonstrations, and align technical solutions with business goals.",
      "Guided and mentored junior and mid level developers through code reviews, technical discussions, and best practices.",
      "Managed task planning, technical documentation, and development workflows to improve team productivity and project visibility.",
      "Resolved critical technical challenges, optimized application performance, and maintained high code quality standards.",
      "Translated UI/UX designs into responsive, accessible, and user friendly enterprise applications."
    ],
    achievements: [
      "Successfully led and delivered multiple enterprise web applications from development through production deployment.",
      "Took ownership of projects after leadership transitions, ensuring smooth handover and continuous product enhancement.",
      "Established reusable component libraries and dynamic frameworks that significantly reduced development effort and improved consistency.",
      "Improved team efficiency through technical leadership, documentation standards, and streamlined development processes.",
      "Delivered scalable frontend solutions that enhanced maintainability, performance, and user experience across multiple products."
    ]
  },
  {
    id: 'w2',
    year: '2021',
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Ecoinsoft Solution',
    period: '2021 – 2023',
    icon: 'Briefcase',
    description:
      'Collaborated with senior engineers to deliver enterprise web applications. Developed responsive UIs, integrated RESTful APIs, and participated in code reviews, testing, and deployment cycles.',
    responsibilities: [
      "Collaborated closely with senior developers and project leads to deliver enterprise web applications.",
      "Developed responsive and dynamic user interfaces using modern frontend technologies.",
      "Integrated RESTful APIs and implemented reusable, maintainable frontend components.",
      "Participated in code reviews, bug fixing, testing, and deployment activities.",
      "Managed source code using Git, including branch management, code merging, and conflict resolution.",
      "Worked with cross functional teams to transform business requirements into user friendly solutions."
    ],
    achievements: [
      "Successfully delivered multiple dynamic web applications and reporting systems used by business stakeholders.",
      "Contributed to the completion of large scale enterprise projects while maintaining code quality and performance.",
      "Improved development efficiency through reusable components and collaborative code review practices.",
      "Gained hands on experience in project delivery, team collaboration, and frontend architecture best practices."
    ]
  },
  {
    id: 'w3',
    year: '2019',
    type: 'work',
    title: 'Junior Frontend Developer',
    organization: 'Ecoinsoft Solution',
    period: 'March 2019 – 2021',
    icon: 'Briefcase',
    description:
      'Started my professional software journey by learning core web development fundamentals through hands-on practice. Built initial applications with HTML, CSS, and JavaScript while assisting in bug fixing and UI/UX improvements.',
    responsibilities: [
      "Learned core programming and web development fundamentals through hands on practice, research, and studying technical documentation.",
      "Built initial web applications using HTML, CSS, and JavaScript, focusing on structuring clean, functional pages.",
      "Explored different programming languages and frontend frameworks to understand their strengths and best use cases.",
      "Assisted in fixing bugs and improving the styling, UX, and UI of existing pages to strengthen attention to detail and code quality.",
    ],
    achievements: [
      "Built a strong foundation in frontend development fundamentals, setting the stage for growth into more advanced frameworks and enterprise projects.",
      "Developed a habit of reading documentation and researching solutions independently, a skill that carried into every project afterward.",
    ],
  },
  {
    id: 'e-thesis',
    year: '2019',
    type: 'education',
    title: 'Thesis – Skincare Sales Management System',
    organization: 'Norton University',
    period: '2019 – 2020',
    icon: 'GraduationCap',
    description:
      'Designed and built a complete end-to-end system for a graduation thesis: a web-based admin dashboard for product, order, and customer management, paired with a companion mobile app for customers.',
    responsibilities: [
      'Delivered a full stack system covering admin management and customer mobile ordering',
      'Successfully presented and defended the project as a graduation thesis',
    ],
    achievements: [
      "Delivered a complete end-to-end system covering both admin management and customer facing mobile ordering.",
      "Successfully presented and defended the project as a graduation thesis, demonstrating a real world e-commerce workflow from product management to customer purchase.",
    ],
  },
  {
    id: 'e3',
    year: '2019',
    type: 'education',
    title: 'Flutter Mobile Development',
    organization: 'INSTINCT INSTITUTE Center',
    period: '2019',
    url: 'https://instinct.edu.kh/',
    icon: 'GraduationCap',
    description:
      'Completed professional training in Flutter, focusing on cross-platform mobile development using Dart, widget architecture, state management, and backend service integration.',
    responsibilities: [
      'Built cross-platform Android/iOS apps with a single codebase',
      'Learned responsive mobile UI design and state management patterns',
    ],
    achievements: []
  },
  {
    id: 'e1',
    year: '2016',
    type: 'education',
    title: 'Bachelor of Software Development',
    organization: 'Norton University',
    period: '2016 – 2020',
    url: 'https://www.norton-u.com/',
    icon: 'GraduationCap',
    description:
      'Studied software development principles, database systems, web application development, system analysis and design, and modern programming technologies. Graduated with practical experience in scalable software solutions.',
    responsibilities: [
      'Focused on software engineering, OOP, databases, and web development',
      'Completed multiple academic projects building real-world applications',
    ],
    achievements: []
  },
  {
    id: 'e4',
    year: '2018',
    type: 'education',
    title: 'JavaScript, jQuery & PHP',
    organization: 'REAN WEB',
    period: '2018',
    url: 'https://www.reanweb.com/',
    icon: 'GraduationCap',
    description:
      'Gained practical experience building dynamic web pages, handling client-side interactivity, and developing basic web applications with traditional web-stack technologies.',
    responsibilities: [
      'Learned event-driven programming',
      'Developed simple CRUD web applications',
    ],
    achievements: []
  },

  // ── Education: HTML / CSS / Bootstrap ───────────────────────────────
  {
    id: 'e5',
    year: '2018',
    type: 'education',
    title: 'HTML, CSS & Bootstrap',
    organization: 'ETECT Center',
    period: '2018',
    url: 'https://etech.center/',
    icon: 'GraduationCap',
    description:
      'Completed training in web development using HTML, CSS, and Bootstrap. Gained practical knowledge in building responsive web layouts, styling modern user interfaces, and creating mobile friendly designs using Bootstrap framework components and grid systems.',
    responsibilities: [
      'First hands-on exposure to structured web layouts',
      'Developed static websites with Bootstrap grid and responsive utility classes',
    ],
    achievements: []
  },
  {
    id: 'e6',
    year: '2016',
    type: 'education',
    title: 'C, C++, C# & Java',
    organization: 'ANT Training',
    period: '2016 – 2017',
    url: 'http://training.antkh.com/',
    icon: 'GraduationCap',
    description:
      'Completed intensive training in core programming languages including C, C++, C#, and Java. Gained strong understanding of programming fundamentals such as data structures, algorithms, object oriented programming (OOP), problem solving techniques, and software development principles. Built practical coding experience through hands on exercises and small scale application development projects.',
    responsibilities: [
      'Developed algorithmic thinking and problem-solving discipline',
      'Gained deep understanding of OOP and multi-paradigm programming',
    ],
    achievements: []
  },
  {
    id: 'e7',
    year: '2014',
    type: 'education',
    title: 'English & Computer',
    organization: 'AHHA Education Cambodia',
    period: '2014 – 2016',
    url: 'https://www.ahhaeducation.org/cambodia/',
    icon: 'GraduationCap',
    description:
      'Participated in holistic education programs focused on English communication, information technology, leadership, problem solving, personal development, and community engagement. Developed practical skills through hands on learning, collaborative activities, and leadership oriented initiatives designed to strengthen both professional and personal capabilities.',
    responsibilities: [
      'Learned basic Computer and communication skills',
      'Developed leadership mindset through the school programs',
    ],
    achievements: []
  },
  {
    id: 'w-teaching',
    year: '2015',
    type: 'work',
    title: 'English Teacher',
    organization: 'AHHA Education',
    period: '2015 – 2016',
    icon: 'Briefcase',
    description:
      'Planned and delivered English lessons for students of varying ages and proficiency levels, adapting teaching methods to different learning styles.',
    responsibilities: [
      "Planned and delivered English lessons for students of varying ages and proficiency levels, adapting teaching methods to different learning styles.",
      "Prepared lesson materials, exercises, and assessments to build students' reading, writing, speaking, and listening skills.",
      "Tracked individual student progress and provided regular feedback to help learners improve over time.",
    ],
    achievements: [
      "Helped students consistently improve their spoken English confidence and classroom participation over the course of the program.",
      "Built structured lesson plans that were adopted as a reference for other instructors at the center.",
    ],
  },
];

export const journeyInfo = {
  label: 'My Journey',
  title: 'My Journey in Software Development',
  description:
    'My journey from the frist steps in programming to becoming a frontend engineer has been shaped by continuous learning, problem-solving, and a passion for building impactful digital experiences. Along the way, I have transformed ideas into modern web applications, solved complex business challenges through technology, and contributed to the growth of frontend teams by sharing knowledge, improving processes, and leading development efforts.',
};
