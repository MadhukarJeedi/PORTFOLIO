// Each group = one issuer card on the page.
// credentials[] = individual certificates shown in the popup modal.
export const certificationGroups = [
  {
    id: 1,
    groupTitle: "IBM Certifications",
    issuer: "IBM",
    issuerColor: "blue",
    icon: "Award",
    category: "AI / ML & Data Science",
    credentials: [
      {
        label: "Machine Learning for Data Science Projects",
        url: "https://drive.google.com/file/d/16QsN_fVH18ZQUCo_vEoApVzamP03gu8I/view?usp=sharing",
      },
      {
        label: "Enterprise Data Science in Practice",
        url: "https://drive.google.com/file/d/1J6d9dIhsa6H1MD4FeyyGOoR3lJs-Tqjl/view?usp=sharing",
      },
      {
        label: "Data Fundamentals & Getting Started with Data",
        url: "https://drive.google.com/file/d/1Tqb0oWCkJTIpG2N4BXlyIlRrwYGwS4ih/view?usp=sharing",
      },
      {
        label: "IBM Data Science Specialization",
        url: "https://drive.google.com/file/d/1ZgS6P70LKXL1STjCtC4ypanAgufCwsaB/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    groupTitle: "Kaggle Certifications",
    issuer: "Kaggle",
    issuerColor: "teal",
    icon: "BookOpen",
    category: "Python / Data / ML",
    credentials: [
      {
        label: "Pandas",
        url: "https://drive.google.com/file/d/1fEPLKv3FkrWRx2AlBar-0a48D5d-U7D0/view?usp=sharing",
      },
      {
        label: "SQL",
        url: "https://drive.google.com/file/d/1_AODbHeWW_Hbkkm1EfDN8xHoWDM62jUn/view?usp=sharing",
      },
      {
        label: "Machine Learning",
        url: "https://drive.google.com/file/d/15Gb0S-JQrF56MH6jm8qiQvpSTOuCiOBi/view?usp=sharing",
      },
      {
        label: "Intermediate Machine Learning",
        url: "https://drive.google.com/file/d/1MdAobuHkRaKFZU_iGMk1KQwQ8_lGOLrX/view?usp=sharing",
      },
      {
        label: "Data Cleaning",
        url: "https://drive.google.com/file/d/1MdAobuHkRaKFZU_iGMk1KQwQ8_lGOLrX/view?usp=sharing",
      },
      {
        label: "Feature Engineering",
        url: "https://drive.google.com/file/d/1OkkfQXnBEsI742OfQCiZDFAadfLfrUsd/view?usp=sharing",
      },
      {
        label: "Machine Learning Explainability",
        url: "https://drive.google.com/file/d/1684Gp8sQ-Jt9GQPL7nyC0KRvFqIi1Krk/view?usp=sharing",
      },
    ],
  },
  {
    id: 3,
    groupTitle: "Python Essentials",
    issuer: "Cisco",
    issuerColor: "blue",
    icon: "Shield",
    category: "Python",
    credentials: [
      {
        label: "Python Essentials 1",
        url: "https://drive.google.com/file/d/1Y2YeBa-OmH3YCvbmtOzZ8nsQPe4joxCK/view?usp=sharing",
      },
      {
        label: "Python Essentials 2",
        url: "https://drive.google.com/file/d/1ai4kj9XsxErymx3n04_jH3D8Y71l9LSg/view?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    groupTitle: "Python (Basic)",
    issuer: "HackerRank",
    issuerColor: "green",
    icon: "Code2",
    category: "Python",
    credentials: [
      {
        label: "Python (Basic) Certificate",
        url: "https://drive.google.com/file/d/1nFx6h1hqvkzJDCTn8fiC115cllbnYP9U/view?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    groupTitle: "National Apprenticeship Certificate",
    issuer: "Govt. of India / NCVT",
    issuerColor: "amber",
    icon: "Medal",
    category: "Professional",
    credentials: [],
  },
];

export const issuerColors = {
  blue:  { bg: "rgba(59, 130, 246, 0.1)",  border: "rgba(59, 130, 246, 0.3)",  text: "#60a5fa" },
  teal:  { bg: "rgba(20, 184, 166, 0.1)",  border: "rgba(20, 184, 166, 0.3)",  text: "#2dd4bf" },
  green: { bg: "rgba(34, 197, 94, 0.1)",   border: "rgba(34, 197, 94, 0.3)",   text: "#4ade80" },
  amber: { bg: "rgba(245, 158, 11, 0.1)",  border: "rgba(245, 158, 11, 0.3)",  text: "#fbbf24" },
};

