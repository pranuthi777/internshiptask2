export const initialProjects = [
  {
    id: 'landing-page',
    title: 'Ridgeway Instrument Co.',
    year: 2026,
    category: 'web',
    description:
      'Landing page for a made-up company that repairs field instruments. Plain HTML, CSS and JavaScript, no frameworks. My first internship task.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://pranuthi777.github.io/landing-page-project/',
    repoUrl: 'https://github.com/pranuthi777/landing-page-project',
    starred: true,
  },
  {
    id: 'react-portfolio',
    title: 'This portfolio',
    year: 2026,
    category: 'web',
    description:
      'The site you’re on. Built with React and React Router as my second internship task — my first real React project.',
    tags: ['React', 'React Router', 'Vite'],
    liveUrl: 'https://react-portfolio-zeta-azure.vercel.app',
    repoUrl: 'https://github.com/pranuthi777/react-portfolio',
    starred: true,
  },
  {
    id: 'csci-1105',
    title: 'CSCI 1105 exercises',
    year: 2026,
    category: 'java',
    description:
      'Small Java programs from my intro programming course, like practising the Math class and seeing how integer and decimal division differ.',
    tags: ['Java'],
    liveUrl: '',
    repoUrl: '',
    starred: false,
  },
];

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'java', label: 'Java' },
  { value: 'starred', label: 'Starred' },
];
