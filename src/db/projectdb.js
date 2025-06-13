import image1 from '../Banner/Screenshot 2025-06-13 125901.png'
import image2 from '../Banner/Screenshot 2025-06-13 132010.png'
import image3 from '../Banner/Screenshot 2025-06-13 133614.png'
import image4 from '../Banner/Screenshot 2025-06-13 135802.png'
import image5 from '../Banner/Screenshot 2025-06-13 142043.png'
import image6 from '../Banner/Screenshot 2025-06-13 143804.png'
import image7 from '../Banner/Screenshot 2025-06-13 144709.png'
import image8 from '../Banner/Screenshot 2025-06-13 174359.png'
import {
  css,
  express,
  firebase,
  Flask,
  html,
  javascript,
  mongodb,
  mySQL,
  nextjs,
  node,
  react,
  redux,
  tailwind,
  typescript,
} from "./techstack";

export const ProjectList = [
  {
    heading: "StudyNotion",
    img: image1,
    title: "EdTech Platform",
    description:
      "Built a full-stack EdTech platform using the MERN stack, where instructors can upload course videos and students can browse, purchase, and watch lectures. Features include JWT-based auth, email verification, password reset, and protected routing, with a responsive UI built using Tailwind CSS.",
    techStack: [node,react, express,mongodb ,javascript, tailwind],
    liveLink: "",
    gitLink: "https://github.com/gauravsahu9668/StudyNotion",
  },
  {
    heading: "ReviewCraft",
    img: image2,
    title: "Part 1",
    description:
      "Built a full-stack testimonial platform where users can create personalized review spaces through a 4-step process, including space details, thank-you pages, notifications, and extra settings. The platform displays both video and text reviews with real-time previews. Customers can submit feedback via text or video, and users can like, view, and manage received reviews seamlessly",
    techStack: [node, express,mySQL,firebase,react, typescript,redux, tailwind],
    liveLink: "https://reviewcraft.netlify.app/",
    gitLink: "https://github.com/gauravsahu9668/Testimonial_frontend",
  },
  {
    heading: "ReviewCraft",
    img: image3,
    title: "Part 2",
    description:
      "Implemented the customer-facing interface where users can submit text or video reviews through a simple, responsive form. Customers can either type their feedback, upload a pre-recorded video file, or directly record using their device’s camera. The system ensures a smooth and user-friendly experience across all devices",
    techStack: [node,express,react,tailwind,typescript],
    liveLink: "https://chic-puffpuff-b72889.netlify.app/",
    gitLink: "https://github.com/gauravsahu9668/ManageTestimonial",
  },
  {
    heading: "Horizon",
    img: image4,
    title: "Banking App",
    description:
      "Built a secure digital banking app using Next.js and PostgreSQL, allowing users to send, receive, deposit, and withdraw money. Integrated Dwolla for ACH transfers and Plaid for real-time bank account linking. Ensured smooth transaction flows, robust authentication, and a clean, responsive UI",
    techStack: [nextjs,mySQL,tailwind,typescript],
    liveLink: "",
    gitLink: "https://github.com/gauravsahu9668/Bank_app",
  },
  {
    heading: "MLtunner",
    img: image5,
    title: "Hyperparams tunning app",
    description:
      "Built a no-code ML tuning platform using React and Flask that allows users to upload datasets, configure hyperparameters, and visualize model performance. Supports 10+ ML algorithms with real-time plots for metrics, learning curves, and diagnostics. Enables deployment of the best-performing model as an API",
    techStack: [node,tailwind,Flask,typescript,react],
    liveLink: "",
    gitLink: "https://github.com/gauravsahu9668/Hyperparameter-tuner",
  },
  {
    heading: "Razorpay Clone",
    img: image6,
    title: "Static razorpay clone",
    description:
      "Built a simple, responsive frontend clone of Razorpay using HTML, TailwindCSS, and JavaScript, replicating the UI and layout to demonstrate design skills and attention to detail",
    techStack: [html,tailwind,javascript],
    liveLink: "https://gauravsahu9668.github.io/Razorepay-clone/",
    gitLink: "https://github.com/gauravsahu9668/Razorepay-clone",
  },
  {
    heading: "Password generator",
    img: image7,
    title: "Strong password generator",
    description:
      "Built a responsive password generator using HTML, CSS, and JavaScript that allows users to customize length and character types, generating strong, secure passwords instantly",
    techStack: [html,css,javascript],
    liveLink: "https://gauravsahu9668.github.io/Password-generator/",
    gitLink: "https://github.com/gauravsahu9668/Password-generator",
  },
  {
    heading: "AuraCuts",
    img: image8,
    title: "Online Saloon Booking App",
    description: "Working... ",
    techStack: [react, tailwind,mySQL,typescript, redux, node, mongodb, express],
    liveLink: "",
    gitLink: "https://github.com/gauravsahu9668/AuraCuts",
  },
];
