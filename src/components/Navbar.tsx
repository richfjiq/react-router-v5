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
            <NavLink to="/" activeClassName="nav-active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="nav-active" exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="nav-active" exact>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
