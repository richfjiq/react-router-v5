import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/lazy1" component={() => <LazyPage1 />} exact />
        <Route path="/lazy2" component={() => <LazyPage2 />} exact />
        <Route path="/lazy3" component={() => <LazyPage3 />} exact />
      </Switch>
    </Router>
  );
};

export default Navigation;
