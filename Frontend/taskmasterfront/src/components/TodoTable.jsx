

export default function TodoTable({project}){

return <div className="TodoTable">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {project && project.tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.priorityType}</td>
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