export interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  features?: string[];
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Catharsis Empire",
    description:
      "A Laravel-based e-commerce platform with a modern design and a complete shopping system.",
    longDescription:
      "Catharsis Empire is an e-commerce application built with Laravel as the main backend framework. This project integrates Vite for modern asset management and uses Tailwind CSS, Bootstrap, and Alpine.js for an interactive and responsive front-end. The application includes product catalog features, shopping cart, checkout system, user authentication, and an admin panel for product management.",
    tags: [
      "Laravel",
      "PHP",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Alpine.js",
      "Axios",
    ],
    imageUrl: "/images/project1.png",
    demoUrl: "#",
    githubUrl: "https://github.com/gayubrw/catharsis_empire.git",
    features: [
      "Product catalog with search and filter functionality",
      "Shopping cart system",
      "Checkout and payment system",
      "User authentication",
      "Admin panel for product management",
      "Responsive design using Tailwind CSS and Bootstrap",
    ],
  },
  {
    id: 2,
    title: "Catharsis Empire 2",
    description:
      "A modern e-commerce frontend built with Vue.js, offering a responsive and elegant user experience.",
    longDescription:
      "Catharsis Empire 2 is the frontend interface of the Catharsis Empire e-commerce platform, developed using Vue.js. While it differs in its technological implementation from the first Catharsis Empire project, both serve the same brand and product line. This project focuses on a clean and intuitive design, leveraging Vue’s component-based architecture for efficient development. It includes features such as a product catalog, interactive shopping cart, user authentication, and smooth navigation to deliver a comfortable shopping experience.",
    tags: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "Vue Router",
      "Vuex",
    ],
    imageUrl: "/images/project2.png",
    demoUrl: "#",
    githubUrl: "https://github.com/gayubrw/catharsis_empire2/tree/main/vue",
    features: [
      "Responsive product catalog with filtering options",
      "Interactive shopping cart system",
      "User authentication and profile management",
      "Smooth navigation with Vue Router",
      "State management using Vuex",
      "Backend API integration via Axios",
    ],
  },
  {
    id: 3,
    title: "GOAT NEWS",
    description: "Portal berita ringan dan cepat dengan React.js.",
    longDescription:
      "Goat News is a news portal application built using React.js. This project aims to present various types of current news with a lightweight, fast-access, and user-friendly display. The application connects to an API to retrieve the latest news in real-time and provides search features, news categorization (such as politics, technology, entertainment, sports, and more), and a responsive display for mobile devices. With a purely front-end approach, Goat News is suitable for users who want to get information directly without interruption.",
    tags: [
      "React.js",
      "JavaScript",
      "CSS",
      "REST API",
      "Axios",
      "React Router",
    ],
    imageUrl: "/images/project3.png",
    demoUrl: "#",
    githubUrl: "https://github.com/gayubrw/goat_news",
    features: [
      "Real-time retrieval of the latest news from the API",
      "Search and filter news by category",
      "Lightweight and responsive interface",
      "Navigating between pages using React Router",
      "Data integration using Axios",
      "Clean and easy to use",
    ],
  },
  {
    id: 4,
    title: "PortoGayu",
    description: "This web.",
    longDescription: "This web.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/project4.png",
    demoUrl: "#",
    githubUrl: "https://github.com/gayubrw/PortoGayu.git",
    features: ["-"],
  },
];
