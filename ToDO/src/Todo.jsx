import { useState } from "react";

function Todo() {
    const [task,setTask] = useState("")
    const [tasks, setTasks] = useState([]); 
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const saveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editValue;
        setTasks(updatedTasks);
        setEditIndex(null);
    };

    const submitTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks,task])
        setTask("")
    }

    return (
        <div className="main">
            <h1>Todo</h1>
            <hr />
            <div className="heading">
                <h1>Tasks</h1>
            </div>
            <div>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={submitTask}>Add Task</button>
            </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <div key={index} className="taskBox">
                        <input className="checkBox" type="checkbox" />
                        {editIndex === index ? (
                            <input
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                autoFocus
                                className="editInput"
                            />
                        ) : (
                            <h3 className="task">{task}</h3>
                        )}

                        <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))} className="deleteBtn">
                            <span className="deleteIcon">×</span>
                        </button>

                        {editIndex === index ? (
                            <button onClick={() => saveTask(index)} className="saveBtn">
                                Save
                            </button>
                        ) : (
                            <button onClick={() => { setEditIndex(index); setEditValue(task); }} className="editBtn">
                                Edit
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
