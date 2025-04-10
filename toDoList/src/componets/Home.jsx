import React, { useState } from 'react';
import { Button, TextInput, Stack } from '@carbon/react';

const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Tareas</h2>
      <Stack gap={7}>
        <TextInput
          id="task"
          labelText="Nueva Tarea"
          placeholder="Ingresa una tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleAddTask} kind="primary" style={{ width: '100%' }}>
          Agregar Tarea
        </Button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </Stack>
    </div>
  );
};

export default Home;
