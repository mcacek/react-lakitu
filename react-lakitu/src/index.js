import React from 'react';

import ReactDOM from 'react-dom';

import { 
  browserHistory, 
  IndexRoute, 
  Route, 
  Router
} from 'react-router'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import Events from './Events'
import Home from './Home'
import Login from './Login'
import NoMatch from './NoMatch'

import DoorsContainer from './containers/DoorsContainer'

import reducer from './reducers'
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}/>
        <Route path="doors" component={DoorsContainer}/>
        <Route path="events" component={Events}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
