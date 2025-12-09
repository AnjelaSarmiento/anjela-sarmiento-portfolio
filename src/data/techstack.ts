export interface TechItem {
  id: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const techStack: TechItem[] = [
  // Frontend (from your resume)
  {
    id: "1",
    name: "HTML5",
    icon: "html5",
    category: "frontend",
  },
  {
    id: "2",
    name: "CSS3",
    icon: "css3",
    category: "frontend",
  },
  {
    id: "3",
    name: "JavaScript",
    icon: "javascript",
    category: "frontend",
  },
  {
    id: "4",
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
  },
  {
    id: "5",
    name: "React",
    icon: "react",
    category: "frontend",
  },
  {
    id: "6",
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
  },
  {
    id: "7",
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "frontend",
  },
  {
    id: "8",
    name: "Bootstrap",
    icon: "bootstrap",
    category: "frontend",
  },
  {
    id: "9",
    name: "Sass",
    icon: "sass",
    category: "frontend",
  },
  {
    id: "10",
    name: "jQuery",
    icon: "jquery",
    category: "frontend",
  },
  {
    id: "11",
    name: "AJAX",
    icon: "api",
    category: "frontend",
  },
  {
    id: "12",
    name: "Axios",
    icon: "api",
    category: "frontend",
  },
  {
    id: "13",
    name: "Socket.io",
    icon: "socketio",
    category: "frontend",
  },

  // Backend / Languages
  {
    id: "14",
    name: "PHP",
    icon: "php",
    category: "backend",
  },
  {
    id: "15",
    name: "C++",
    icon: "cplusplus",
    category: "backend",
  },
  {
    id: "16",
    name: "C#",
    icon: "csharp",
    category: "backend",
  },
  {
    id: "17",
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
  },
  {
    id: "18",
    name: "Express.js",
    icon: "express",
    category: "backend",
  },
  {
    id: "19",
    name: "CodeIgniter",
    icon: "codeigniter",
    category: "backend",
  },
  {
    id: "20",
    name: "RESTful API",
    icon: "api",
    category: "backend",
  },
  {
    id: "21",
    name: "JWT",
    icon: "jwt",
    category: "backend",
  },
  {
    id: "22",
    name: "WebRTC",
    icon: "webrtc",
    category: "backend",
  },

  // Databases
  {
    id: "23",
    name: "MySQL",
    icon: "mysql",
    category: "database",
  },
  {
    id: "24",
    name: "MongoDB",
    icon: "mongodb",
    category: "database",
  },

  // Tools & Platforms
  {
    id: "25",
    name: "Git",
    icon: "git",
    category: "tools",
  },
  {
    id: "26",
    name: "GitHub",
    icon: "github",
    category: "tools",
  },
  {
    id: "27",
    name: "Postman",
    icon: "postman",
    category: "tools",
  },
  {
    id: "28",
    name: "Figma",
    icon: "figma",
    category: "tools",
  },
  {
    id: "29",
    name: "VS Code",
    icon: "vscode",
    category: "tools",
  },
];

