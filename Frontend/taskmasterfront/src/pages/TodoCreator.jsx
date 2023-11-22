import TodoForm from "../components/TodoForm";
import { useParams } from "react-router-dom";

export default function TodoCreator(){
    const {projectId} = useParams();

    return <>
        <h1>creator</h1>
        <TodoForm 
            projectId = {projectId}
        />
    </>
}