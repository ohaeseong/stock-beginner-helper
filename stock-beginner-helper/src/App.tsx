import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { BasedTemplate } from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BasedTemplate} />
      </Switch>
    </Router>
  );
}

export default App;
