import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function ProjectCreator(){
    const navigate = useNavigate();

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        if(!authenticated){
            navigate("/");
        }
    },[navigate])

    return <>
        <h1>Project Create</h1>
    </>
}