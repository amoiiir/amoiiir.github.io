// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub repositories and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My curriculum vitae (CV) showcasing my education, work experience, skills, and achievements in the field of technology. This CV is designed to provide a comprehensive overview of my qualifications and experiences for potential employers, collaborators, and anyone interested in learning more about my professional background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-top-3-in-gamuda-ai-academy",
        
          title: "Top 3 in Gamuda AI Academy!",
        
        description: "We actually won!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/top3-gamuda-ai/";
          
        },
      },{id: "post-we-build-airis",
        
          title: "We build AIris!",
        
        description: "A complete rundown of our capstone project, AIris.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/airis-application/";
          
        },
      },{id: "post-i-joined-gamuda-ai-academy",
        
          title: "I joined Gamuda AI Academy!",
        
        description: "A wonderful place to learn how to integrate AI into software development and solve real-world problems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/gamuda-ai-academy/";
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_AmirHamzah_SoftwareDevelopment.pdf", "_blank");
        },
      },{
        id: 'social-email_social',
        title: 'Email_social',
        section: 'Socials',
        handler: () => {
          window.open("mailto:amiriium381@gmail.com", "_blank");
        },
      },{
        id: 'social-linkedin_social',
        title: 'Linkedin_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-amir-hamzah/", "_blank");
        },
      },{
        id: 'social-github_social',
        title: 'Github_social',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/amoiiir", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
