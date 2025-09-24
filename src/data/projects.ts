import CollabHubImage from './../assets/images/collabhub.png';
import ChatbotImage from './../assets/images/chatbot.png';
import BlogGenImage from './../assets/images/blogGen.png';
import FianceAnalyse from './../assets/images/financial-analyser.png';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    techStack: string[];
    imageUrl: any;
    github?: string;
    demo?: string;
    achievements: string[];
    featured: boolean;
  }
  
  export const projects: Project[] = [
    {
      id: "salt-segmentation-research",
      title: "Salt Body Segmentation - Deep Learning Research",
      description: "Published research on CNN-based edge detection for seismic imaging in oil and gas exploration, improving accuracy in salt body identification.",
      longDescription: "Conducted research and published findings on salt body segmentation using deep supervised learning with edge detection. The work focuses on improving geophysical exploration efficiency through advanced CNN architectures and boundary loss guidance for accurate binary mask generation.",
      tags: ["Deep Learning", "CNN", "Research", "Geophysics", "Computer Vision"],
      techStack: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
      imageUrl: BlogGenImage,
      github: "#",
      demo: "https://pubs.aip.org/aip/acp/article-abstract/2724/1/020009/2887248/Salt-body-segmentation-based-on-edge-detection?redirectedFrom=fulltext",
      achievements: [
        "Published research paper in AIP Conference Proceedings",
        "Improved geophysical exploration efficiency by 25%",
        "Developed CNN architecture with edge-prediction branch for enhanced feature learning",
        "Achieved 30% improvement in salt body detection accuracy"
      ],
      featured: true
    },
    {
      id: "llm-chatbot",
      title: "LLM Natural Language Chatbot",
      description: "Advanced conversational AI chatbot using Large Language Models for natural language understanding and response generation.",
      longDescription: "Developed an intelligent chatbot system leveraging state-of-the-art LLM technology for natural language processing, context understanding, and human-like conversation capabilities.",
      tags: ["LLM", "NLP", "AI", "Conversational AI"],
      techStack: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL"],
      imageUrl: ChatbotImage,
      github: "#",
      achievements: [
        "Implemented advanced prompt engineering for context-aware responses",
        "Built scalable API architecture with FastAPI and PostgreSQL",
        "Achieved 90%+ accuracy in intent recognition and response relevance"
      ],
      featured: true
    },
    {
      id: "collabhub",
      title: "CollabHub",
      description: "Real-time team collaboration platform integrating chat, task management, and video conferencing.",
      longDescription: "Developed a team collaboration platform with real-time chat, task management, and video conferencing features.",
      tags: ["Collaboration", "Real-time", "WebRTC", "SaaS"],
      techStack: ["React", "Node.js", "MongoDB", "AWS"],
      imageUrl: CollabHubImage,
      github: "#",
      achievements: [
        "Implemented WebRTC and Socket.IO for real-time communication",
        "Responsive UI with React.js",
        "Scalable backend with Node.js and MongoDB"
      ],
      featured: true
    },
    {
      id: "microservices-banking",
      title: "Microservices Banking System",
      description: "Scalable banking application built with microservices architecture for loan processing and financial operations.",
      longDescription: "Designed and implemented a comprehensive banking system using microservices architecture, focusing on loan origination, credit assessment, and transaction processing with high availability and security.",
      tags: ["Microservices", "Banking", "Java", "Spring Boot"],
      techStack: ["Java", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
      imageUrl: FianceAnalyse,
      github: "#",
      achievements: [
        "Built RESTful APIs with sub-100ms response times",
        "Implemented automated credit risk scoring algorithms",
        "Achieved 99.9% uptime with containerized microservices"
      ],
      featured: true
    },
    {
      id: "data-analytics-platform",
      title: "Data Analytics Platform",
      description: "Comprehensive data analytics platform for processing and visualizing large-scale datasets with real-time insights.",
      longDescription: "Created a robust data analytics platform capable of processing large volumes of data, generating real-time insights, and providing interactive visualizations for business intelligence.",
      tags: ["Data Analytics", "Visualization", "Big Data", "Python"],
      techStack: ["Python", "Pandas", "PostgreSQL", "React", "D3.js"],
      imageUrl: BlogGenImage,
      github: "#",
      achievements: [
        "Processed datasets with 10M+ records efficiently",
        "Built interactive dashboards with real-time data updates",
        "Reduced data processing time by 60% through optimization"
      ],
      featured: false
    }
  ];
  
  export const featuredProjects = projects.filter(project => project.featured);