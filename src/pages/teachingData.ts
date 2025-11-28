export interface TeachingClass {
  title: string;
  term: string;
  institution: string;
  description: string;
  link?: string;
}

export const teachingClasses: TeachingClass[] = [
  {
    title: "Introduction to Political Science",
    term: "Fall 2025",
    institution: "ETH Zurich",
    description: "Introductory lecture to political science for bachelor students, spanning political institutions, behaviour, and policy-making processes."
  },
  {
    title: "Proseminar: Foundations of Scientific Inquiry and Empirical Research",
    term: "Fall 2024, Spring 2025",
    institution: "ETH Zurich",
    description: "Undergraduate course on research design and academic writing in political science."
  },
  {
    title: "Teaching Assistance: Methods II, Research Unit Comparative Public Policy-Analysis and Empirical Methods",
    term: "Spring 2021",
    institution: "University of Münster",
    description: "Three weekly tutorials on various empirical methods and government activity."
  },
  {
    title: "Teaching Assistance: Statistics, Unit Emperical Methods",
    term: "Fall 2020",
    institution: "University of Münster",
    description: "Two weekly tutorials on OLS regression and maximum likelihood estimation."
  }
];
