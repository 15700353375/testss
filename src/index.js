import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import routes from './router'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((
  <Router history={browserHistory} routes={routes} >
  {/* <IndexRoute component={Home} /> */}
    {/* <Route path="/" breadcrumbName="Home" component={App}>
      <IndexRoute component={Home} />
      <Route path="main" breadcrumbName="Main" component={Main} />
      <Route path="advanced" breadcrumbName="Advanced" component={Advanced} />
      <Route path="todoList" breadcrumbName="TodoList" component={TodoList} />
    </Route> */}
  </Router>
), document.getElementById('root'))

serviceWorker.unregister();