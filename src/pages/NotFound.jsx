import { Link } from 'react-router-dom';
import usePageTitle from './usePageTitle';

export default function NotFound() {
  usePageTitle('Not found');

  return (
    <section className="section container page-top not-found">
      <p className="big-number">404</p>
      <h1>Page not found</h1>
      <p className="lead">There’s nothing at this address.</p>
      <Link to="/" className="button primary">
        Back to home
      </Link>
    </section>
  );
}
