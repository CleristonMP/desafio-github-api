import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
