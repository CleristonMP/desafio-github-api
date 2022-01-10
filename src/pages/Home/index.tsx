import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="container custom-home-container">
      <div>
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
        <Link to="/perfil">
          <button type="button" className="btn btn-primary">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
