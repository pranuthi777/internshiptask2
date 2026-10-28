import { Link } from 'react-router-dom';
import usePageTitle from './usePageTitle';

export default function NotFound() {
  usePageTitle('Not found');

  return (
    <section className="section">
      <h1>Page not found</h1>
      <p>
        There’s nothing at this address. <Link to="/">Go back home</Link>.
      </p>
    </section>
  );
}
