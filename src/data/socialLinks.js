// Centralized social links — edit this file to update or add social profiles
export const socialLinks = {
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/madhukarjeedi/",
    description: "Connect with me on LinkedIn",
    color: "#0a66c2",
    ariaLabel: "Jeedi Madhukar on LinkedIn",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/MadhukarJeedi",
    description: "Explore my projects and code",
    color: "#e5e7eb",
    ariaLabel: "Jeedi Madhukar on GitHub",
  },
  kaggle: {
    label: "Kaggle",
    url: "https://www.kaggle.com/madhukarjeedi",
    description: "Explore my Data Science work",
    color: "#20beff",
    ariaLabel: "Jeedi Madhukar on Kaggle",
  },
  email: {
    label: "Email",
    url: "mailto:iammadhukarjeedi@gmail.com",
    description: "iammadhukarjeedi@gmail.com",
    color: "#60a5fa",
    ariaLabel: "Send email to Jeedi Madhukar",
  },
};

// Ordered array for rendering in components
export const socialLinksArray = [
  socialLinks.linkedin,
  socialLinks.github,
  socialLinks.kaggle,
];
