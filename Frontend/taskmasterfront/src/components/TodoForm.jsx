import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../statestore/useStore.js"
import { addTaskToProject, updateTaskFromProject } from "../api/projectApi.js";
import "../styles/TodoForm.css"

export default function TodoForm({projectId, todo}){
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const [title, setTitle] = useState(todo?.title ?? "");
    const [description, setDescription] = useState(todo?.description ?? "");
    const [priority, setPriority] = useState(todo?.priorityType ?? "LOW");
    const [completed, setCompleted] = useState(todo?.completed ?? false);

    function handleForm(e){
        e.preventDefault();

        if(todo) {
            updateTaskFromProject(projectId, todo.id, title, description, priority, completed);
            setTimeout(() => {
                navigate(`/projectmanager/${projectId}`);
            },100)
            return;
        }
    
        addTaskToProject(projectId, title, description, priority);
        setTimeout(() => {
            navigate(`/projectmanager/${projectId}`);
        },100)
    }

    function cancelCreate(){
        navigate(`/dashboard/${user.username}`);
    }

    return <div className="todoForm">
        <form onSubmit={handleForm}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                Descripton:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <label>
                Priority:
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </label>
            <button>Done</button>
            <button onClick={cancelCreate}>Cancel</button>
        </form>
    </div>
}