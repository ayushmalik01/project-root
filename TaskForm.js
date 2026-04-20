import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ fetchTasks }) {
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/", task);
        setTask({ title: "", description: "" });
        fetchTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title"
                value={task.title}
                onChange={(e) =>
                    setTask({ ...task, title: e.target.value })
                }
                required
            />
            <input
                placeholder="Description"
                value={task.description}
                onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                }
            />
            <button>Add Task</button>
        </form>
    );
}