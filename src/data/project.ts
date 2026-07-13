import { Project } from "../types/types";
// Simple helper function
const img = (filename: string) => `@/assets/images/${filename}`;
// Import all images directly
import posImg from "@/assets/images/pos.jpg";
import tonleImg from "@/assets/images/tonle.jpg";
import iacImg from "@/assets/images/iac.jpg";
import iacWebsiteImg from "@/assets/images/iac-website.jpg";
import bakuImg from "@/assets/images/baku.jpg";
import hrmsImg from "@/assets/images/hrms.jpg";
import vmsImg from "@/assets/images/vms.jpg";
import emsImg from "@/assets/images/ems.jpg";
import smsImg from "@/assets/images/sms.jpg";
import smsWebsiteImg from "@/assets/images/sms-website.jpg";
import wpmsImg from "@/assets/images/wpms.jpg";
import moeImg from "@/assets/images/moe.jpg";
import moeWebsiteImg from "@/assets/images/moe-website.jpg";
import dpsImg from "@/assets/images/dps.jpg";
import pmsImg from "@/assets/images/pms.jpg";
import ocmImg from "@/assets/images/ocm.jpg";
import chakraImg from "@/assets/images/chakra.jpg";
import maffImg from "@/assets/images/maff.jpg";
import coreFrontendImg from "@/assets/images/core-frontend.png";
import coreFrontendHttpImg from "@/assets/images/core-frontend-http.png";
import portfolioImg from "@/assets/images/portfolio.png";
import moeWebsiteMockupImg from "@/assets/images/moe-website-mockup.png";
import moeWebportalMockupImg from "@/assets/images/moe-webportal-mockup.png";
import wpmsWebportalMockupImg from "@/assets/images/wpms-webportal-mockup.png";
import smsWebportalMockupImg from "@/assets/images/sms-webportal-mockup.png";
import smsWebsiteMockupImg from "@/assets/images/sms-website-mockup.png";
import dpsWebportalMockupImg from "@/assets/images/dps-webportal-mockup.png";
import maffWebportalMockupImg from "@/assets/images/maff-webportal-mockup.png";

export const projects: Project[] = [
  {
    id: "1",
    name: "POS System",
    description:
      "(POS) System that supports real time sales transactions, inventory management, customer records, and business reporting. The platform was designed to improve operational efficiency, provide accurate business insights, and deliver a seamless user experience for both staff and management.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: true,
    photo: posImg,
    year: 2019,
    manageStack: "Develop some modules",
    url: ''
  },
  {
    id: "2",
    name: "Tonle System",
    description:
      ` The General Insurance Information System is a web based platform that serves as an essential strategic tool for managing and analyzing data within the general insurance industry. The system enables insurance companies and related stakeholders to efficiently collect, store, and process information related to insurance policies, claims, and customer data.`,
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: true,
    photo: tonleImg,
    year: 2021,
    manageStack: "Develop and lead some modules",
    url: ''
  },
  {
    id: "3",
    name: "IAC Web Portal",
    description:
      "The Insurance Association Web Portal is a centralized platform provided by the Insurance Association for all registered insurance companies. The system allows member companies to access, download, and submit required documents through an online platform with high security and efficiency.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: iacImg,
    year: 2023,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "4",
    name: "IAC Website",
    description:
      "Insurance Association of Cambodia (IAC) is a non profit trade association representing the interests of the insurance industry and working to strengthen and promote the overall development and growth of insurance sector in Cambodia.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: true,
    photo: iacWebsiteImg,
    year: 2023,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "5",
    name: "BAKU System",
    description: "Web based platform that serves as an essential strategic tool for managing and analyzing data  user management, dashboard, report, payment, customer care, enrolment, push notification, subscription",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: bakuImg,
    year: 2024,
    manageStack: "Led continuous development and maintained existing features",
    url: ''
  },
  {
    id: "6",
    name: "HRMS System",
    description:
      "A system that manage user management, employee attendant, leave management, schedule management, report, payroll, asset, working overtime, sale activity, appraisal, dashboard, report",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: hrmsImg,
    year: 2023,
    manageStack: "Led continuous development and maintained existing features",
    url: ''
  },
  {
    id: "7",
    name: "VMS System",
    description:
      "A system that provides location tracking, status monitoring, and behavior monitoring of vessels over a two way fully acknowledged satellite cellular data communications with a relatively low data rate and near real time data transfer.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: vmsImg,
    year: 2024,
    manageStack: "Led continuous development and maintained existing features",
    url: ''
  },
  {
    id: "8",
    name: "EMS System",
    description:
      "A system that manage on examination setup, question bank, student template format, generate table, exam result, report, exam history, user management, realtime to start and end the exam, auto submit",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: emsImg,
    year: 2024,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "9",
    name: "SMS System",
    description: "A school management system provided to manage user management, mission management, question, organization, class setup, staff and instructor management, student payroll, question bank, attendant management, master data setup, online course, certificate template, exam setup, report ",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: smsImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "10",
    name: "SMS Website",
    description:
      "The School Website is a public platform designed to provide visitors with easy access to school information. The website serves as a central hub for school news, academic programs, admissions, events, announcements, and contact information, helping strengthen communication and engagement between the school and its community.",
    category: "frontend",
    techStack: ["Nuxt"],
    isFeatured: false,
    photo: smsWebsiteImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "11",
    name: "WPMS System",
    description:
      "Developed and maintained frontend features for a Water Pollution Monitoring System, enabling users to monitor water quality metrics, visualize environmental data, and access real time monitoring information through interactive dashboards and reporting tools.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: wpmsImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "12",
    name: "MOE System",
    description:
      "Ministry of Environment of Cambodia, supporting employee management, attendance tracking, document workflows, organizational structures, scheduling, mission management, and secure authentication. The system helps streamline government operations, improve efficiency, and support data driven administration through centralized digital processes.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: moeImg,
    year: 2024,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "13",
    name: "MOE Website",
    description:
      "Ministry of Environment's public website, delivering accessible and responsive user experiences for citizens, businesses, and stakeholders. The platform provides environmental information, government services, policy updates, news, publications, and public resources while supporting the ministry's digital transformation and public communication initiatives.",
    category: "frontend",
    techStack: ["Nuxt"],
    isFeatured: false,
    photo: moeWebsiteImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "14",
    name: "DPS System",
    description:
      "ប្រព៏ន្ធគ្រប់គ្រងទិន្នន័យស្ថិតិកសិកម្មកម្ពុជា សំរាប់ Department of Planning and Statistics (DPS) of Ministry of Argriculture enabling government users to collect, visualize, and manage agricultural statistics through an intuitive and responsive web application. The platform supports complex data workflows, reporting dashboards, and structured information management to improve accessibility, accuracy, and efficiency in agricultural planning processes.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: dpsImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "15",
    name: "PMS System",
    description:
      "ប្រព័ន្ធគ្រប់គ្រងជំងឺរាតត្បាត (Pandemic Management System) managing infectious disease outbreak data. The system improves the efficiency of tracking patients, contacts, and response activities during disease outbreaks. It is designed to handle complex datasets, streamline operational processes, and strengthen decision making capabilities, enabling faster and more effective outbreak management.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: pmsImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "16",
    name: "OCM System",
    description:
      "Office of the Council of Ministers supporting employee management, attendance tracking, document workflows, organizational structures, scheduling, mission management, and secure authentication. The system helps streamline government operations, improve efficiency, and support data driven administration through centralized digital processes.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: ocmImg,
    year: 2026,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "17",
    name: "CHAKRA System",
    description:
      "A digital environmental platform manage users, group, family, dashboard, report, donation budget for anything, and learn about sustainability, waste management, recycling, plants, and tree conservation while encouraging community participation and positive environmental actions.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: chakraImg,
    year: 2025,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "18",
    name: "MAFF System",
    description:
      "Ministry of Agricultures, Forestry and Fisheries to centralize farmer data, agricultural services, land and product information, knowledge resources, reporting, dynamic translate, and stakeholder communication (chat). The system enables data driven decision making, improves operational efficiency, and supports the digital transformation of agricultural services.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: maffImg,
    year: 2026,
    manageStack: "Developed and led the entire project",
    url: ''
  },
  {
    id: "19",
    name: "Core Frontend System",
    description:
      "Designed and developed a reusable frontend foundation for enterprise applications, featuring dynamic CRUD modules, configurable data grids, shared service layers, reusable UI components, and standardized project architecture. The system reduced repetitive development effort, accelerated feature delivery, improved code consistency, and enabled teams to build and maintain complex business applications more efficiently.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: coreFrontendImg,
    year: 2023,
    manageStack: "Developed Entire Project",
    url: ''
  },
  {
    id: "20",
    name: "Core Frontend HTTP System",
    description:
      "Architected a reusable HTTP infrastructure layer for enterprise applications, including authentication guards, JWT token management, request/response interceptors, centralized API services, error handling mechanisms, loading indicators, and standardized response processing. The solution ensured secure user authentication, seamless backend communication, consistent error messaging, and simplified API integration, enabling teams to develop features faster while maintaining code quality and application reliability.",
    category: "frontend",
    techStack: ["Angular"],
    isFeatured: false,
    photo: coreFrontendHttpImg,
    year: 2024,
    manageStack: "Developed Entire Project",
    url: ''
  },
  {
    id: "21",
    name: "Portfolio",
    description:
      "Designed and developed personal portfolio website using Vue and Tailwind CSS to showcase professional experience, technical skills, projects, and achievements. Implemented responsive layouts, reusable components, dynamic content management, dark mode support. The application highlights my journey as a Frontend Engineer while demonstrating best practices in UI development, component design, performance optimization, and maintainable frontend architecture.",
    category: "frontend",
    techStack: ["Vue"],
    isFeatured: false,
    photo: portfolioImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: ''
  },
  {
    id: "22",
    name: "MOE Website Mockup",
    description:
      "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: moeWebsiteMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/GXfqyCYITsxfaN1zK93NHy/MOE-website-Mockup?node-id=1-115&t=ueGcqNhUZh91ZWck-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=693283367132054474'
  },
  {
    id: "23",
    name: "MOE Webportal Mockup",
    description:
      "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: moeWebportalMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/98icdcUmzDxBERy0Pa299l/MOE-Web-Portal?node-id=1-136&starting-point-node-id=1%3A136&scaling=contain&content-scaling=fixed'
  },
  {
    id: "24",
    name: "WPMS Webportal Mockup",
    description: "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: wpmsWebportalMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/04vOQhdKDKVRm5PcM8kLGR/School-Management-System-UX-UI?node-id=65-2353&p=f&t=1RHqeSY1Gk8Rabk7-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3'
  },
  {
    id: "25",
    name: "SMS Webportal Mockup",
    description: "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: smsWebportalMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/04vOQhdKDKVRm5PcM8kLGR/School-Management-System-UX-UI?node-id=65-2353&p=f&t=1RHqeSY1Gk8Rabk7-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3'
  },
  {
    id: "27",
    name: "SMS Website Mockup",
    description:
      "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: smsWebsiteMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/h8JXMMx1B78QU9Z8czL7j5/SMS-Website?node-id=0-1'
  },
  {
    id: "28",
    name: "DPS Webportal Mockup",
    description:
      "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: dpsWebportalMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/A7SXfAGUjELav1bk9fM5Mb/DPS%E2%80%8B-Prototype-Demo?node-id=2012-225134&t=SmqgaRRI4mu7eC58-0&scaling=contain&content-scaling=fixed&page-id=870%3A37366&starting-point-node-id=3465%3A41169'
  },
  {
    id: "29",
    name: "MAFF Webportal Mockup",
    description:
      "Redesigned and developed a modern, responsive, and user-friendly website mockup for the Ministry of Education (MOE). The project demonstrates modern UI/UX design principles, improved information architecture, intuitive navigation, and visually engaging layouts while maintaining accessibility and mobile responsiveness.",
    category: "frontend",
    techStack: ["ui/ux"],
    isFeatured: false,
    photo: maffWebportalMockupImg,
    year: 2026,
    manageStack: "Developed Entire Project",
    url: 'https://www.figma.com/proto/g7xTUiZWd3VHPijFGCGDt2/MAFF?node-id=25-452&p=f&t=sSXbOXFo1OyklM7f-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A452'
  }
];

export const projectInfo = {
  title: 'Featured Projects',
  description: `Over the course of my career, I have contributed to the development of a diverse range of enterprise, government, healthcare, insurance, environmental, education, and agriculture focused systems. My experience spans building large scale web applications that support mission critical operations, complex business workflows, real time data processing, and digital transformation initiatives.
  As a Frontend Engineer, I have been responsible for designing responsive user interfaces, implementing scalable architectures, integrating backend services, optimizing performance, and delivering user centered experiences across multiple industries. These projects demonstrate my ability to transform complex requirements into reliable, maintainable, and impactful digital solutions.`
};