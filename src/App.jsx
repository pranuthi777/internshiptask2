import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ProjectsContext, ThemeContext } from './context';
import { initialProjects } from './data/projects';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProjectsPage from './pages/ProjectsPage';

function getSavedTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
  } catch {
    // localStorage can be blocked, just use the system setting
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getSavedTheme);
  const [projects, setProjects] = useState(initialProjects);

  // Bootstrap 5.3 switches all its colours with the data-bs-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function toggleStar(id) {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, starred: !project.starred } : project,
      ),
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ProjectsContext.Provider value={{ projects, toggleStar }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ProjectsContext.Provider>
    </ThemeContext.Provider>
  );
}
