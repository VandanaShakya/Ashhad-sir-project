import { FaLaptopCode, FaChartBar, FaShieldAlt, FaCloud, FaCodeBranch, FaHandsHelping } from 'react-icons/fa'
import images from '../assets/images';

export const servicesData = [
    {
      icon: FaLaptopCode,
      title: 'Managed IT Services',
      description: 'We handle all aspects of your IT infrastructure, ensuring optimal performance, security, and reliability so you can focus on core business objectives.'
    },
    {
      icon: FaChartBar,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. We use advanced analytics tools and techniques to help you make informed, strategic business decisions.'
    },
    {
      icon: FaShieldAlt,
      title: 'Cyber Security',
      description: 'Protect your valuable assets with robust, multi-layered security solutions. We offer proactive monitoring, threat detection, and risk management strategies.'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Leverage the power of the cloud for scalability and efficiency. We specialize in migration, management, and optimization of cloud infrastructure (AWS, Azure, GCP).'
    },
   
  ];

  // projects data //


export const projectsData = [
  {
    title: "Fundzz",
    description:
      "Fundzz is a comprehensive mutual fund platform offering insights, charts, and investment tracking tools for retail investors.",
    image: images.project1,
    tags: ["#Finance", "#MutualFunds", "#Investment"],
    link: "https://fundzz.com/"
  },
  {
    title: "World Market View",
    description:
      "World Market View provides real-time market analysis, stock trends, and global financial insights for professional traders.",
    image: images.project2,
    tags: ["#MarketAnalysis", "#Stocks", "#Finance"],
    link: "https://worldmarketview.in/",
  },
  {
    title: "QBS Accounting",
    description:
      "QBS Accounting is a cloud-based accounting software that simplifies bookkeeping, invoicing, and financial reporting for businesses.",
    image: images.project3,
    tags: ["#Accounting", "#SaaS", "#Finance"],
    link: "https://qbsaccounting.us/",
  },
  {
    title: "Goldaroma Rice",
    description:
      "Goldaroma Rice is an e-commerce platform dedicated to premium rice products with an easy-to-navigate shopping experience.",
    image: images.project4,
    tags: ["#Ecommerce", "#Food", "#Retail"],
    link: "https://goldaromarice.com/",
  },
  {
    title: "Glory Printers",
    description:
      "Glory Printers delivers high-quality printing solutions, specializing in custom packaging, labels, and commercial printing services tailored for businesses.",
    image: images.project5,
    tags: ["#Printing", "#CustomPackaging", "#LabelPrinting"],
    link: "https://www.gloryprinters.com/",
  },
];
