import { Link } from "react-router-dom"
import '../styles/WelcomePage.css'
import { useState } from "react"
import { login } from "../api/api";

export default function WelcomePage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        login(username, password);
    }

    return <>
    <div className="WelcomePage">
      <div className="welcome-content">
        <h1>Welcome to TaskMaster</h1>
        <p>TaskMaster is a simple application to track your projects and tasks!</p>
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <br />
            <label>
                Password:
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br />
            <button>Login</button>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </form>
        </div>
    </div>
    </>
}