import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { findTaskById } from "../api/projectApi";
import TodoForm from "../components/TodoForm";

export default function TodoUpdater(){
    const {todoId} = useParams();
    const {projectId} = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {

        findTaskById(todoId).then((data) => setTodo(data));
    },[]);

    return <>
        <h1>Updater</h1>
        {todo && <TodoForm
            projectId = {projectId}
            todo = {todo}
        />}
    </>
}