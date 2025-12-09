export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Discovering HTML: Basics to Build & Structure Web Pages",
    issuer: "Junior Philippine Computer Society – Mindoro State University",
    date: "2025-10-25",
    credentialUrl: "/certificates/discovering-html.png",
  },
  {
    id: "2",
    title: "Software Programming 101",
    issuer: "MST Connect",
    date: "2025-09-10",
    credentialUrl: "/certificates/software-programming-101.png",
  },
  {
    id: "3",
    title: "Hour of Code – AI Ready ASEAN Programme",
    issuer: "ASEAN Foundation (Google.org & DICT Aurora)",
    date: "2025-08-30",
    credentialUrl: "/certificates/hour-of-code-ai-ready-asean.png",
  },
  {
    id: "7",
    title: "The Hour of Code",
    issuer: "Code.org",
    date: "2025-08-30",
    credentialUrl: "/certificates/hour-of-code-code-org.png",
  },
  {
    id: "6",
    title: "Certificate of Citation - Academic Distinction",
    issuer: "Don Honorio Ventura State University (DHVSU) - College of Computing Studies",
    date: "2025-05-20",
    credentialUrl: "/certificates/dhvsu-citation-2025.png",
  },
  {
    id: "4",
    title: "Certificate of Completion – Software Associate",
    issuer: "Tarellia Solutions OPC",
    date: "2025-05-19",
    credentialUrl: "/certificates/software-associate-tarellia.png",
  },
  {
    id: "5",
    title: "IRCITE 2025 Presentation",
    issuer: "Philippine Society of Information Technology Educators - Central Luzon (PSITE-CL)",
    date: "2025-04-04",
    credentialUrl: "/certificates/ircite-2025-presentation.png",
  },
  {
    id: "8",
    title: "SaaS Business Fundamentals",
    issuer: "AWS Training and Certification",
    date: "2023-12-16",
    credentialUrl: "/certificates/saas-business-fundamentals-aws.png",
  },
];

