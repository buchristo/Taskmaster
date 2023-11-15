
export default function WelcomePage(){

    return <>
    <div>
        <h1>Welcome to TaskMaster!</h1>
        <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password"/>
            <button>Login</button>
        </form>
        <button>Register</button>
    </div>
    </>
}