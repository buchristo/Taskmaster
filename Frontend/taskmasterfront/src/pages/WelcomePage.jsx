import { Link } from "react-router-dom"
import '../styles/WelcomePage.css'

export default function WelcomePage(){

    return <>
    <div className="WelcomePage">
      <div className="welcome-content">
        <h1>Welcome to TaskMaster</h1>
        <p>TaskMaster is a simple application to track your projects and tasks!</p>
        <form>
            <label>
                Username:
                <input type="text"/>
            </label>
            <br />
            <label>
                Password:
                <input type="password"/>
            </label>
            <br />
            <button type="button">Login</button>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </form>
        </div>
    </div>
    </>
}