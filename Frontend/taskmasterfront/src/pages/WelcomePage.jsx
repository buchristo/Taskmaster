import { Link, useNavigate } from "react-router-dom"
import '../styles/WelcomePage.css'
import { useState, useEffect } from "react"
import { login, isAuthenticated } from "../api/api";
import { useStore } from "../statestore/useStore"

export default function WelcomePage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage ,setErrorMessage] = useState("");
    const user = useStore((state) => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated() && user){
            navigate(`/dashboard/${user.username}`);
        } else {
            return;
        }
    },[navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setErrorMessage("");
            navigate(`/dashboard/${username}`);
          } catch (error) {
            setErrorMessage("Invalid username or password. Please try again.");
          }
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
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    </div>
    </>
}