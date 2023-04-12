import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} render={() => <Component />} exact />
          ))}
          <Redirect to={routes[0].path} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Navigation;
