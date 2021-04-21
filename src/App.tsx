import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import Entry from './pages/Entry';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#0c1d34", height: '100vh', minHeight : '100vh'}}>
      <Router>
        <Container textAlign="center">
          <Route exact path="/" component={Entry} />
          <Route path="/home" component={Home} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
