import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div
          style={{
            padding: 0,
            margin: 0,
            position: 'relative',
            height: '100vh',
          }}
        >
          <nav>
            <img src="vite.svg" alt="React Logo" height={100} width={100} />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container">
            <Switch>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} render={() => <Component />} />
              ))}

              <Redirect to={routes[0].path} />
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  );
};

export default Navigation;
