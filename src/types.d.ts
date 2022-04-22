type project = {
  id: number;
  title: string;
  logo: string;
  blurHash?: string;
  link: string;
  desc: string;
  technologies: string[];
};

type article = {
  title: string;
  desc: string;
  link: string;
  views: string;
  published: string;
  tags: string[];
  github_url: string;
};
