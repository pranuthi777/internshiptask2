import { createContext } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
export const ProjectsContext = createContext({ projects: [], toggleStar: () => {} });
