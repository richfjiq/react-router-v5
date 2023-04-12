import {
  Link,
  NavLink,
  Redirect,
  Route,
  Router,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const LazyLayout = () => {
  const { url, path } = useRouteMatch();

  console.log({ url });
  console.log({ path });

  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}> Lazy Page 1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}> Lazy Page 2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}> Lazy Page 3</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPage3 />
        </Route>

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  );
};

export default LazyLayout;
