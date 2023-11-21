import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserByName } from "../api/userapi"
import { useStore } from "../statestore/useStore"

export default function Dashboard(){
    const {name} = useParams();
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);


    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        if(!authenticated){
            navigate("/");
        }
        getUserByName(name).then((data) => setUser(data))

    }, [navigate]);

    return <>
        <h1>Welcome to your Dashboard {user && user.username}</h1>
    </>
}