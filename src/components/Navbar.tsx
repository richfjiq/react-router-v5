import { FC, ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

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
          <li>
            <NavLink to="/lazy1" activeClassName="nav-active" exact>
              Lazy 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/lazy2" activeClassName="nav-active" exact>
              Lazy 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/lazy3" activeClassName="nav-active" exact>
              Lazy3
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
