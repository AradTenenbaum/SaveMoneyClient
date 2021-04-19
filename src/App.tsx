import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entry from './pages/Entry';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#0c1d34", height: '100vh', minHeight : '100vh'}}>
      <Router>
        <Container textAlign="center">
          <Route exact path="/" component={Entry} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
