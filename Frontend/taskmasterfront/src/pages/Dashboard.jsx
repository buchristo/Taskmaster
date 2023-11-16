import { isAuthenticated } from "../api/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserByName } from "../api/userapi"


export default function Dashboard(){
    const {name} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState();


    useEffect(() => {
        if(!isAuthenticated()){
            navigate("/");
        }
        getUserByName(name).then((data) => setUser(data))

    }, [navigate]);

    return <>
        <h1>Welcome to your Dashboard {user && user.username}</h1>
    </>
}