import './App.css';
import React, {useState} from 'react';
import Tasks from './components/tasks';
import AddList from './components/form';


function App() {
    const TaskList = []; 

    const [allTasks, setAllTasks] = useState(TaskList);

    const remove = (id) => {
      const filteredTasks = allTasks.filter( (task) => {
          return task.id !== id;
      }); 
      setAllTasks(filteredTasks); 
    };

    const handleCheck = (task) => {
      let updateTodos = allTasks.map((todo) => {
        if (todo === task) {
            let newTodo = { ...todo, completed: !todo.completed }
          return newTodo;
        }
        else {
          return todo;
        }
      })
      setAllTasks(updateTodos);
    }


    return (

      <div className="App">
        <Tasks allTasks = {allTasks}
              remove={remove}
              handleCheck= {handleCheck} /> 
        <AddList allTasks={allTasks} setAllTasks={setAllTasks} />
      </div>
    );
  }

export default App;
