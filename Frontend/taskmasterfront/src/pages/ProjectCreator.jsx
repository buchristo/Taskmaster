import { isAuthenticated } from "../api/api"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ProjectCreator(){
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated()){
            navigate("/");
        }
    },[navigate])

    return <>
        <h1>Project Create</h1>
    </>
}