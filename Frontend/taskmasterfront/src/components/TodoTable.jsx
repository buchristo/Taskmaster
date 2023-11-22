import "../styles/TodoTable.css";
import { Link } from "react-router-dom";

export default function TodoTable({project, deleteTask}){

return <div className="TodoTable">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th></th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {project && project.tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.priorityType}</td>
                        <td className="buttonTd">
                            <Link to={`/todo/update/${task.id}/${project.id}`}>
                                <button>Update</button>
                            </Link>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </td>
                        <td>
                            {task.completed === false ? (
                                <input type="checkbox"></input>) : (
                                <input type="checkbox" defaultChecked={true}></input>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}