export interface TeachingClass {
  title: string;
  term: string;
  institution: string;
  description: string;
  link?: string;
}

export const teachingClasses: TeachingClass[] = [
  {
    title: "Urban Policy Analysis",
    term: "Spring 2025",
    institution: "University of Example",
    description: "Graduate seminar on methods and frameworks for analyzing urban policy, with a focus on environmental and social outcomes.",
    link: "#"
  },
  {
    title: "Environmental Justice",
    term: "Fall 2024",
    institution: "University of Example",
    description: "Undergraduate course exploring the intersection of environment, race, and inequality in global cities.",
    link: "#"
  },
  {
    title: "Quantitative Methods for Social Science",
    term: "Spring 2024",
    institution: "University of Example",
    description: "Core course on quantitative research design, data analysis, and interpretation for social science students."
  },
  {
    title: "Introduction to Urban Studies",
    term: "Fall 2023",
    institution: "University of Example",
    description: "Introductory course covering the fundamentals of urbanization, city planning, and urban social theory."
  }
];
