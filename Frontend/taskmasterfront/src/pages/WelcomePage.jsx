import { Link } from "react-router-dom"

export default function WelcomePage(){

    return <>
    <div>
        <h1>Welcome to TaskMaster!</h1>
        <form>
            <label>
                Username:
                <input type="text"/>
            </label>
            <br />
            <label>
                Password:
                <input type="text"/>
            </label>
            <br />
            <button>Login</button>
        </form>
        <Link to="/register">
            <button>Register</button>
        </Link>
    </div>
    </>
}