import '../styles/Header.css'
import { Outlet, Link } from 'react-router-dom'
import { useStore } from "../statestore/useStore"

function Header() {
  const authenticated = useStore((state) => state.authenticated);

  return (
    <div className="Header">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">
            TaskMaster
          </Link>
        </li>
        {authenticated && 
        <li>
          <Link to="/project/create">
            <button type='button'>Create Project</button>
          </Link>
        </li>
        }
        <li>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}

export default Header
