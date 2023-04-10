import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
          component={() => (
            <Navbar>
              <h1>About</h1>
            </Navbar>
          )}
          exact
        />
        <Route
          path="/users"
          component={() => (
            <Navbar>
              <h1>Users</h1>
            </Navbar>
          )}
          exact
        />
        <Route
          path="/"
          component={() => (
            <Navbar>
              <h1>Home</h1>
            </Navbar>
          )}
          exact
        />
      </Switch>
    </Router>
  );
};

export default Navigation;
