const config = {
  title: "Devesh Mamadapur | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Devesh Mamadapur, a full-stack developer focused on building polished web experiences, interactive UIs, and practical product solutions. Discover recent work spanning React, Next.js, and modern frontend engineering.",
    short:
      "Discover the portfolio of Devesh Mamadapur, a full-stack developer building polished web experiences and practical applications.",
  },
  keywords: [
    "Devesh Mamadapur",
    "portfolio",
    "full-stack developer",
    "frontend developer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "interactive UI",
    "Bengaluru",
    "India",
  ],
  author: "Devesh Mamadapur",
  email: "naresh.khatri2345@gmail.com",
  site: "https://github.com/DeveshM10",

  // for github stars button
  githubUsername: "DeveshM10",
  githubRepo: "3d-portfolio-naresh",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/devesh-mamadapur-46a811243/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/DeveshM10",
  },
};
export { config };
