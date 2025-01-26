type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  // {
  //   title: "My CV",
  //   path: "/myCV",
  // },
  // {
  //   title: "What can i do?",
  //   path: "/myWork",
  // },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },

        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        // {
        //   name: "My CV",
        //   link: "/myCV",
        //   leavesWebsite: false,
        // },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/Lefgk",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Telegram",
          link: "https://t.me/Lefkk",
          // icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },

        // {
        //   name: "Email",
        //   link: "mailto:lefgiak@gmail.com",
        //   icon: "/static/icons/mail-f.svg",
        //   leavesWebsite: true,
        // },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I didn't create this site, I just adjusted it 💙",
  },
};
