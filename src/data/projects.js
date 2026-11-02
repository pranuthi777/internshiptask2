export const initialProjects = [
  {
    id: 'ridgeway',
    title: 'Ridgeway Instrument Co.',
    year: 2026,
    category: 'web',
    description:
      'A landing page for a made-up company that builds and repairs field instruments. Written in plain HTML, CSS and JavaScript with no frameworks, and fully responsive.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/ridgeway.jpg',
    liveUrl: 'https://pranuthi777.github.io/landing-page-project/',
    repoUrl: 'https://github.com/pranuthi777/landing-page-project',
    starred: true,
  },
  {
    id: 'csci-1105',
    title: 'CSCI 1105 Java exercises',
    year: 2026,
    category: 'java',
    description:
      'Small Java programs from my intro to programming course — practising the Math class, rounding, and the difference between integer and decimal division.',
    tags: ['Java'],
    code: [
      'double result6 = (1 - 2) / 5.0;  // -0.2',
      'double result7 = (1 - 2) / 5;    // 0.0',
      '',
      'double max = Math.max(Math.max(3, 5), 7);',
      'System.out.println("8. " + max);',
    ],
    liveUrl: '',
    repoUrl: '',
    starred: true,
  },
];

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'java', label: 'Java' },
  { value: 'starred', label: 'Starred' },
];
