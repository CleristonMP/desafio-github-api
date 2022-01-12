import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid custom-container">
        <Link to="/" className="navbar-brand custom-brand">
          Github API
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
