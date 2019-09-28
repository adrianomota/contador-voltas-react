import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
