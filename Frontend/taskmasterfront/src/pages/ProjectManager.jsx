import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { findProjectById, deleteTask, updateTaskFromProject } from "../api/projectApi";
import TodoTable from "../components/TodoTable";
import "../styles/ProjectManager.css"

export default function ProjectManager(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState();

    useEffect(() => {
        findProjectById(id).then((data) => setProject(data));
    },[navigate, setProject]);

    function handleDelete(taskId){
        deleteTask(taskId);
        setTimeout(() => {
            findProjectById(id).then((data) => setProject(data));
        }, 100);
    }

    function changeStatus(projectId, todoId, title, description, priority, status){
        updateTaskFromProject(projectId, todoId, title, description, priority, status);
    }

    return <>
    <div className="ProjectManager">
        <h1>{project && project.name}</h1>
        <div className="projectButtons">
            <Link to={`/todo/create/${id}`}>
                <button type="button">Add new Task</button>
            </Link>
        </div>
        <TodoTable 
            project = {project}
            deleteTask = {handleDelete}
            todoStatus = {changeStatus}
        />
    </div>
    </>
}