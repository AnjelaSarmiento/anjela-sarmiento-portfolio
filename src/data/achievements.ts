export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "award" | "recognition" | "milestone";
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Academic Excellence with Honor",
    description: "Recognized for outstanding academic performance with honors.",
    date: "2020-2021",
    category: "award",
  },
  {
    id: "2",
    title: "Dean's Lister",
    description: "Included in the Dean's List for exemplary academic performance.",
    date: "2021-2022",
    category: "award",
  },
  {
    id: "3",
    title: "Dean's Lister",
    description: "Recognized again as a Dean's Lister for consistent academic excellence.",
    date: "2024",
    category: "award",
  },
  {
    id: "4",
    title: "President's Lister",
    description: "Achieved President's List status for top academic standing.",
    date: "2024-2025",
    category: "award",
  },
  {
    id: "5",
    title:
      "Philippine Society of Information Technology Educators (PSITE) – Central Luzon",
    description:
      "Presented MOBILITYCOM IoT wearable glove at IRCITE 2025",
    date: "2025-04-04",
    category: "recognition",
  },
];

