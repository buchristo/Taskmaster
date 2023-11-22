import '../styles/Header.css'
import { Outlet, Link } from 'react-router-dom'
import { useStore } from "../statestore/useStore"
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const authenticated = useStore((state) => state.authenticated);
  const logoutStore = useStore((state) => state.logout);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  function handleLogout(){
    setUser(null);
    logoutStore();
    navigate("/");
  }

  return (
    <div className="Header">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">
            TaskMaster
          </Link>
        </li>
        {
        authenticated && 
        <li>
          <Link to="/project/create">
            <button type='button'>Create Project</button>
          </Link>
        </li>
        }
        {
          authenticated &&
          <li>
            <button type='button' onClick={handleLogout}>Logout</button>
          </li>
        }
        {
          !authenticated &&
          <li>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </li>
        }
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}

export default Header
