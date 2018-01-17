import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddItem from './api/articles';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' api={App} />
        <Route path='/articles' component={articles} />
      </div>
  </Router>,
  document.getElementById('root')
);
