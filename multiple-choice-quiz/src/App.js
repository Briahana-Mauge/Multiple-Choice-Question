import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './styles.css';
import Quiz from './Components/Quiz';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link> <Link to="/quiz">Quiz</Link>{' '}
        <Link to="/about">About</Link>{' '}
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};
export default App;
