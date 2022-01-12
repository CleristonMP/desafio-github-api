import axios from 'axios';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import { GithubUser } from '../../components/types/githubUser';
import './styles.css';

type FormData = {
  githubUser: string;
};

const Perfil = () => {
  const [githubUser, setGithubUser] = useState<GithubUser>();

  const [formData, setFormData] = useState<FormData>({
    githubUser: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${formData.githubUser}`)
    .then((response) => {
      setGithubUser(response.data);
    }).catch((error) => {
      setGithubUser(undefined);
      console.log(error);
    });
  };

  return (
    <div className="wrapper-container">
      <div className="container-fluid">
        <div className="custom-search-container mb-4">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="githubUser"
              value={formData.githubUser}
              className="form-control"
              placeholder="Usuário Github"
              aria-describedby="Campo de Busca de Usuário do Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mb-3">
              Encontrar
            </button>
          </form>
        </div>
      </div>
      <div className="container-fluid">
        {githubUser && <ResultCard githubUser={githubUser} />}
      </div>
    </div>
  );
};

export default Perfil;
