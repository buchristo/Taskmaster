import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { findProjectById } from "../api/projectApi";

export default function ProjectManager(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState();

    useEffect(() => {

        findProjectById(id).then((data) => setProject(data));
    },[navigate]);

    return <>
        <h1>{project && project.name}</h1>
    </>
}