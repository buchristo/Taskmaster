import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useStore } from "../statestore/useStore";
import { createProject } from "../api/projectApi";
import "../styles/ProjectCreator.css"

export default function ProjectCreator(){
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const [projectName, setProjectName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated') === 'true';
        if(!authenticated){
            navigate("/");
        }
    },[])

    function handleCreateProject(e){
        e.preventDefault();

        if(projectName.length < 3){
            setErrorMessage("Your Project name must at least contain 3 characters!")
            return
        } else {
            createProject(projectName, user.id);

            setTimeout(() => {
                navigate(`/dashboard/${user.username}`);
            },100);
        }
    }

    function cancelCreate(){
        navigate(`/dashboard/${user.username}`);
    }

    return <>
    <div className="projectCreate">
        <h1>Create a new Project!</h1>
        <form onSubmit={handleCreateProject}>
            <label>
                Project Name:
                <input type="text" onChange={(e) => setProjectName(e.target.value)}/>
            </label>
            {errorMessage && <p>{errorMessage}</p>}
            <button className="createButton" type="submit" >Create</button>
            <button className="cancelButton" type="button" onClick={cancelCreate}>Cancel</button>
        </form>
    </div>
    </>
}