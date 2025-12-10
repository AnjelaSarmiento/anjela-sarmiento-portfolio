export interface Project {
  id: string;
  title: string;
  description: string;
  summary?: string;
  problem?: string;
  role?: string;
  impact?: string;
  highlights?: string[];
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SCMS – Responsive Smart Classroom Management System",
    description:
      "Developed a responsive Smart Classroom Management System using MVC architecture to streamline class management, grading, and submissions across multiple devices. The platform features secure authentication, real-time notifications, user management, file handling, QR-based grading, excuse letter management, intelligent join requests, and seamless API integration.",
    summary:
      "Smart classroom management platform with secure authentication, real-time notifications, QR-based grading, excuse letter handling, join request validation, and streamlined submission/file workflows.",
    problem:
      "Instructors lacked a unified, secure, and cross-device platform for managing classes, grading, submissions, and student attendance with proper validation.",
    role:
      "Led full-stack development using React and CodeIgniter. Designed the system architecture and implemented RESTful API integrations. Built a secure, responsive UI for students and instructors/teachers. Implemented authentication, role management, and validation workflows.",
    impact:
      "Centralized classroom operations into a single platform. Reduced grading friction and improved feedback turnaround time. Improved data accuracy, attendance tracking, and class security.",
    highlights: [
      "Built a QR-based grading and attendance system for fast and reliable verification",
      "Implemented real-time notifications for submissions, approvals, and updates",
      "Developed an Excuse Letter Management System where students submit digital excuse letters and instructors can approve or reject them with audit tracking",
      "Created a Join Request Validation System that automatically sends a request to the instructor when a student scans or enters a class code that does not match their program, year, or section",
      "Secured the platform with JWT authentication, role-based access control, and audit-friendly file handling",
    ],
    image: "/images/scms-1.png",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Sass",
      "CodeIgniter",
      "MySQL",
      "RESTful API",
      "JWT",
      "Postman",
      "Navicat",
    ],
    githubUrl: "https://github.com/AnjelaSarmiento",
    liveUrl: "https://scmsupdatedbackup.vercel.app/auth/login",
  },
  {
    id: "2",
    title: "Sales Force App",
    description:
      "Contributed to the Sales Force App by building key modules including user profile management, task management system, full CRUD operations, role-based access, and file handling.",
    summary:
      "Sales enablement web app with user profiles, task management, CRUD flows, RBAC, and document handling.",
    problem:
      "Field reps needed a secure, centralized way to manage accounts, roles, and sales docs.",
    role:
      "Implemented profile management, CRUD modules, role-based access, and document handling within the team’s architecture.",
    impact: "Improved onboarding clarity and reduced manual permission changes for managers.",
    highlights: [
      "Built profile module with editable roles and permissions",
      "Implemented CRUD flows with validation and server-side filtering",
      "Added secure file handling for sales documents",
      "Developed task management system where users can create, edit, and manage tasks with full CRUD operations",
    ],
    image: "/images/sfa-1.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "RESTful API",
      "JWT",
      "Postman",
      "Navicat",
    ],
    githubUrl: "https://github.com/AnjelaSarmiento",
    liveUrl: "#",
  },
  {
    id: "3",
    title:
      "MobilityCom – An IoT Based Glove for Patients to Communicate Their Needs Through Finger Movements",
    description:
      "Led development of an IoT-based wearable glove that interprets patient finger movements to send messages to nurses or guardians, enhancing communication and patient care.",
    summary:
      "IoT glove translating finger movements into nurse/guardian alerts with web dashboards.",
    problem:
      "Patients struggled to communicate needs quickly and reliably to nurses or guardians.",
    role:
      "Led firmware-to-web integration: gesture mapping, REST API, and UI for alerts/status.",
    impact:
      "Enabled faster nurse/guardian response and clearer patient communication in trials.",
    highlights: [
      "Created gesture detection and mapping pipeline for reliable alerts",
      "Built REST API to relay glove signals to dashboards",
      "Designed simple web UI for real-time alerts and device status",
    ],
    image: "/images/mobilitycom-1.png",
    techStack: [
      "IoT",
      "Embedded Systems",
      "RESTful API",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/AnjelaSarmiento",
    liveUrl: "#",
  },
];

