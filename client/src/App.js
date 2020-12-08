import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './redux/auth/actions';

import store from './redux/store';
import Routes from './routes/routes';
import LoginPageWithSpinner from './pages/login/LoginPageWithSpinner';
import RegisterPageWithSpinner from './pages/register/RegisterPageWithSpinner';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPageWithSpinner} />
          <Route exact path='/register' component={RegisterPageWithSpinner} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
