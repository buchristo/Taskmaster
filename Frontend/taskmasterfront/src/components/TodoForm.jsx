import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from "../statestore/useStore.js"
import { addTaskToProject } from "../api/projectApi.js";

export default function TodoForm({projectId}){
    const navigate = useNavigate();
    const user = useStore((state) => state.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    function handleForm(e){
        e.preventDefault();

        addTaskToProject(projectId, title, description, priority);
        navigate(`/projectmanager/${projectId}`);
    }

    function cancelCreate(){
        navigate(`/dashboard/${user.username}`);
    }

    return <div>
        <form onSubmit={handleForm}>
            <label>
                Title:
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                Descripton:
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <label>
                Priority:
                <select onChange={(e) => setPriority(e.target.value)}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </label>
            <button>Create</button>
            <button onClick={cancelCreate}>Cancel</button>
        </form>
    </div>
}