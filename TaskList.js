import API from "../services/api";

export default function TaskList({ tasks, fetchTasks }) {

    const deleteTask = async (id) => {
        await API.delete(`/${id}`);
        fetchTasks();
    };

    const toggleStatus = async (task) => {
        await API.put(`/${task._id}`, {
            status:
                task.status === "Pending" ? "Completed" : "Pending"
        });
        fetchTasks();
    };

    return (
        <div>
            {tasks.map((task) => (
                <div key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>

                    <button onClick={() => toggleStatus(task)}>
                        Toggle Status
                    </button>

                    <button onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
