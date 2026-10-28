import Projects from '../components/Projects';
import usePageTitle from './usePageTitle';

export default function ProjectsPage() {
  usePageTitle('Projects');

  return <Projects showAll />;
}
