import { GithubUser } from '../types/githubUser';
import './styles.css';

type Props = {
  githubUser: GithubUser;
};

const ResultCard = () => {
  return (
    <div className="custom-result-container row">
      <div className="result-img-container col">
        <img
          src="https://i.pinimg.com/736x/45/fd/23/45fd23068e0a98a7024b55012583ca24.jpg"
          alt="Foto de gatinho fofo"
        />
      </div>
      <div className="result-content-container custom-border col-8">
        <div>
          <h2>Informações</h2>
          <div className="result-info custom-border">
            <h3>Perfil:</h3>
            <p>http://www.teste.com.br</p>
          </div>
          <div className="result-info custom-border">
            <h3>Seguidores:</h3>
            <p>3654</p>
          </div>
          <div className="result-info custom-border">
            <h3>Localidade:</h3>
            <p>País</p>
          </div>
          <div className="result-info custom-border">
            <h3>Nome:</h3>
            <p>Cidadão</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
