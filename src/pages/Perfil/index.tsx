import './styles.css';

const Perfil = () => {
  return (
    <div className="wrapper-container">
      <div className="container-fluid">
        <div className="custom-perfil-container">
          <h1>Encontre um perfil Github</h1>
          <form action="">
            <input
              type="text"
              className="form-control"
              placeholder="Usuário Github"
              aria-describedby="Campo de Busca de Usuário do Github"
            />
            <button type="submit" className="btn btn-primary mb-3">
              Encontrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
