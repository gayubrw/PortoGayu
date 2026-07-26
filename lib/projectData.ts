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
    id: 5,
    title: "Face Recognition with ArcFace and ResNet50",
    description:
      "Group project implementing ArcFace loss from scratch in PyTorch with a pretrained ResNet50 backbone for face recognition on the CASIA dataset.",
    longDescription:
      "Implemented ArcFace loss (Deng et al., IEEE T-PAMI 2021) from scratch in PyTorch, using a pretrained ResNet50 backbone with a 512-dim BN-Dropout-FC-BN embedding head, following the paper's exact hyperparameters (s=64, m=0.5, SGD with MultiStep LR). Trained on the CASIA face dataset (200 identity classes, ~20K images, 80/20 split) on Google Colab with a Tesla T4 GPU over 32 epochs. This is a research/training notebook rather than a deployed application.",
    tags: [
      "PyTorch",
      "ResNet50",
      "ArcFace",
      "Computer Vision",
      "Google Colab",
    ],
    imageUrl: "",
    demoUrl: "",
    githubUrl: "",
    features: [
      "50.08% Top-1 accuracy (100x above random chance)",
      "66.07% Top-3 accuracy",
      "0.9557 macro-average AUC across all 200 classes",
      "ArcFace loss implemented from scratch following the paper's hyperparameters",
      "Pretrained ResNet50 backbone with a 512-dim BN-Dropout-FC-BN embedding head",
      "Evaluated with confusion matrix, ROC curves, and t-SNE embedding visualization",
    ],
  },
  {
    id: 6,
    title: "Skincare Compatibility Checker",
    description:
      "Capstone project: a rule-based NLP/ML engine detecting skincare ingredient incompatibilities, served via a FastAPI backend to a Flutter mobile app.",
    longDescription:
      "Built a rule-based NLP/ML engine to detect skincare ingredient incompatibilities, covering 6 major active-ingredient groups (retinoids, vitamin C, AHA, BHA, niacinamide, benzoyl peroxide) across 7 pairwise interaction rules with graded AVOID/CAUTION severity levels. Cleaned, deduplicated, and merged skincare datasets from 3 sources (Kaggle Cosmetics, Sephora Ingredients, product catalogs) into a unified corpus of 4,082 products spanning 116 brands and 6,696 unique INCI ingredients, normalized into 13 functional categories. Also developed a content-based recommendation engine using cosine similarity over ingredient-function profiles (4,082 x 4,082 similarity matrix).",
    tags: ["Python", "NLP", "Scikit-learn", "FastAPI", "Flutter (collaboration)"],
    imageUrl: "",
    demoUrl: "",
    githubUrl: "",
    features: [
      "4,082 products analyzed across 116 brands",
      "6,696 unique INCI ingredients normalized into 13 functional categories",
      "6 active-ingredient groups across 7 pairwise interaction rules with graded AVOID/CAUTION severity",
      "Content-based recommendation engine using cosine similarity (4,082 x 4,082 matrix)",
      "Integrated into a FastAPI backend, deployed to a Flutter mobile app",
    ],
  },
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
    demoUrl: "",
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
    demoUrl: "",
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
    demoUrl: "",
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
    description:
      "Modern portfolio website with full-stack backend integration using Next.js and Supabase.",
    longDescription:
      "PortoGayu is a modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project features a complete backend integration with Supabase for contact form submissions, project management, and visitor analytics. The website showcases professional design patterns, server-side rendering, and modern web development best practices. It includes functional contact forms, admin dashboard, and a scalable architecture ready for future enhancements.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React",
      "PostgreSQL",
    ],
    imageUrl: "/images/project4.png",
    demoUrl: "",
    githubUrl: "https://github.com/gayubrw/PortoGayu.git",
    features: [
      "Modern responsive design with Tailwind CSS",
      "Full-stack integration with Supabase backend",
      "Functional contact form with database storage",
      "Admin dashboard for message management",
      "Server-side rendering with Next.js",
      "TypeScript for type safety",
      "Visitor analytics and tracking",
      "Row Level Security (RLS) implementation",
    ],
  },
];
