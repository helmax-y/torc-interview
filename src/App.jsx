import React, { useState } from 'react';

import List from './components/List';

function App() {
  const [tasks, setTasks] = useState([[], [], [], []]);

  const addTask = (task, i) => {
    setTasks((tasks) => {
      const newTasks = [...tasks];

      newTasks[i] = [...newTasks[i], task];

      return newTasks;
    });
  };

  const moveTask = (task, colIndex, colIndexTo, taskIndex) => {
    setTasks((currentTasks) => {
      const newTasks = [...currentTasks];
      const increasedColumn = [...newTasks[colIndexTo]];
      const decreasedColumn = [...newTasks[colIndex]];
      
      increasedColumn.splice(taskIndex, 0, task);
      decreasedColumn.splice(taskIndex, 1);

      newTasks[colIndexTo] = increasedColumn;
      newTasks[colIndex] = decreasedColumn;

      return newTasks;
    })
  }

  return (
    <main className="main">
      {['Bob', 'Johnny', 'Lukas', 'Mario'].map((list, i) => (
        <List
          key={list}
          title={list}
          column={i}
          tasks={tasks[i]}
          addTask={addTask}
          moveTask={moveTask}
        />
      ))}
    </main>
  );
}

export default App;
