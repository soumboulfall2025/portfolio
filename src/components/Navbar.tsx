import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">MonPortfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} href="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`} href="/about">À propos</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname === '/project' ? 'active' : ''}`} href="/project">Projets</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
