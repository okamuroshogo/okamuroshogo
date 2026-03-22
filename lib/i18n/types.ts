export type Locale = 'ja' | 'en' | 'ko' | 'zh';

export type Dictionary = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  header: {
    name: string;
    nav: { vision: string; trackRecord: string; philosophy: string; about: string; join: string };
    menu: string;
    backToTop: string;
  };
  hero: {
    subtitle: string;
    heading1: string;
    heading2: string;
    description: string;
    role: string;
    cta: string;
  };
  vision: {
    label: string;
    heading1: string;
    heading2: string;
    p1: string;
    p2: string;
    p3: string;
    cardTitle: string;
    cardDesc: string;
    viewPolicies: string;
    discussGitHub: string;
  };
  trackRecord: {
    label: string;
    heading: string;
    subheading: string;
    records: { year: string; title: string; role: string; description: string; tags: string[] }[];
    rootsTitle: string;
    rootsDesc: string;
    awardsTitle: string;
    awards: { emoji: string; title: string; detail: string }[];
    viewAllWorks: string;
  };
  media: {
    label: string;
    heading: string;
    items: { type: string; title: string }[];
    quoteParagraphs: string[];
    quoteAuthor: string;
  };
  philosophy: {
    label: string;
    heading: string;
    subheading: string;
    values: string[];
    readMore: string;
  };
  aboutMe: {
    label: string;
    heading: string;
    paragraphs: string[];
    profile: { label: string; value: string }[];
    noteLink: string;
  };
  joinUs: {
    label: string;
    heading: string;
    description: string;
    linkLabels: string[];
  };
  footer: { copyright: string };
  works: {
    metaTitle: string;
    metaDesc: string;
    label: string;
    heading: string;
    subheading: string;
    gawainBadge: string;
    gawainSubtitle: string;
    gawainFeatures: string[];
    gawainCta: string;
    gawainEnterprise: string;
    noplanSubtitle: string;
    noplanCards: { title: string; desc: string }[];
    studentTitle: string;
    studentSubtitle: string;
    studentCircle: string;
    studentAwards: { emoji: string; text: string }[];
    activitiesTitle: string;
    activitiesSubtitle: string;
    activities: {
      title: string;
      description: string;
      badge: string;
      url: string;
      image: string;
    }[];
    allTitle: string;
    allSubtitle: string;
    categories: Record<string, string>;
  };
  policies: {
    metaTitle: string;
    metaDesc: string;
    label: string;
    heading: string;
    subheading: string;
    sections: { title: string; items: { label: string; desc: string }[] }[];
    githubTitle: string;
    githubDesc: string;
    githubButton: string;
  };
};
