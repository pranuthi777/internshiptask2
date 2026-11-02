import { Link } from 'react-router-dom';
import usePageTitle from './usePageTitle';

export default function NotFound() {
  usePageTitle('Not found');

  return (
    <section className="py-5 text-center">
      <div className="container py-5">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-4">Oops! Page not found.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </section>
  );
}
