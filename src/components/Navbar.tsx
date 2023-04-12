import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../routes/routes';

interface Props {
  children: ReactElement;
}

const Navbar: FC<Props> = ({ children }) => {
  return (
    <div
      style={{ padding: 0, margin: 0, position: 'relative', height: '100vh' }}
    >
      <nav>
        <img src="vite.svg" alt="React Logo" height={100} width={100} />
        <ul>
          {routes.map(({ path, name }) => (
            <li key={path}>
              <NavLink to={path} activeClassName="nav-active" exact>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
