import '../styles/Header.css'
import { isAuthenticated } from '../api/api'
import { Outlet, Link } from 'react-router-dom'

function Header() {

  return (
    <div className="Header">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">
            TaskMaster
          </Link>
        </li>
        {isAuthenticated && 
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
