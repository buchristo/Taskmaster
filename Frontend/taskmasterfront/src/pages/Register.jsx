import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { newUser } from "../api/register";

export default function Register(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

    function cancelRegistration(e){
        navigate("/");
    }

    function handleRegistration(e){
        e.preventDefault();

        if(!name && !email && !password){
            return console.log("Missing inputs!")
        } else {
            if(password.length >= 4 && password === repeatPass){
                newUser(name, email, password);
                navigate("/");
            } else {
                return console.log("password not matching!")
            }
        }
    }

    return <>
    <div className="registration">
        <h1>Register</h1>
        <form onSubmit={handleRegistration}>
            <label>
                Username:
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                Repeat Password:
                <input type="password" onChange={(e) => setRepeatPass(e.target.value)}/>
            </label>
            <button>Register</button>
            <button onClick={cancelRegistration}>Cancel</button>
        </form>
    </div>
    </>
}