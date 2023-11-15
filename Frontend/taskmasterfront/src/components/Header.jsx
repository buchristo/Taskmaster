import './Header.css'
import { Outlet, Link } from 'react-router-dom'

function Header() {

  return (
    <div className="Header">
    <nav>
      <ul>
        <li className="grow">
          <p>Hello</p>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}

export default Header
