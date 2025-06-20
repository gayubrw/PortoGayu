export interface ContactData {
  header: {
    title: string;
    subtitle: string;
  };
  contactInfo: {
    email: string;
    location: string;
    socialLinks: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
  };
  buttons: Array<{
    text: string;
    href: string;
    isExternal?: boolean;
  }>;
}

export const contactData: ContactData = {
  header: {
    title: "CONTACT",
    subtitle:
      "Have a project in mind or want to discuss a collaboration? Get in touch using the information below.",
  },
  contactInfo: {
    email: "gayubaruwa27@gmail.com",
    location: "Surabaya, East Java, Indonesia",
    socialLinks: [
      {
        name: "GitHub",
        href: "https://github.com/gayubrw",
        icon: "github",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/gayubaruwa",
        icon: "linkedin",
      },
      {
        name: "Twitter",
        href: "https://twitter.com/gayubrw",
        icon: "twitter",
      },
      {
        name: "Instagram",
        href: "https://instagram.com/gayubrw",
        icon: "instagram",
      },
    ],
  },
  buttons: [
    {
      text: "DOWNLOAD CV",
      href: "/CV.pdf",
      isExternal: true,
    },
  ],
};
