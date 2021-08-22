import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

//-- Components -- //
import Landing from './components/Landing/Landing';
import Cards from './components/Cards/Cards.jsx'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/Cards" component={Cards}/> 
        </Switch>
      
      </BrowserRouter>
     
 
    </div>
  );
}

export default App;

