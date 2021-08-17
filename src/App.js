import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/projects" component={ Projects } />
      </Switch>
    </>
  );
}

export default App;
