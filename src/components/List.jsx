import React from 'react';

const List = ({ title, column, tasks, addTask, moveTask }) => {
    const handleButtonClick = () => {
        const newTask = window.prompt('Please enter new task');

        if (newTask) {
            addTask(newTask, column);
        }
    }

    return (
        <section>
            <h2>{title}</h2>
            <hr />

            <ul>
                {tasks.map((task, i) => (
                    <li key={task}>
                        <button
                            type="button"
                            onClick={() => moveTask(task, column, column - 1, i)}
                            disabled={column === 0}
                        >
                            &lt;
                        </button>
                        <span className="task">{task}</span>
                        <button
                            type="button"
                            onClick={() => moveTask(task, column, column + 1, i)}
                            disabled={column === 3}
                        >
                            &gt;
                        </button>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                onClick={handleButtonClick}
            >
                + Add a task
            </button>
        </section>
    );
};

export default List;
