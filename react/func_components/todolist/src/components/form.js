import React, {useState} from "react";


const AddList = (props) => {
    const {allTasks, setAllTasks} =  props; 
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTasks ([...allTasks,
            { task : task, completed : false, id: Math.floor(Math.random() * 100000000).toString()}])
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label>Task To do: </label>
            <input type="text" value={task} onChange={ (e) => setTask(e.target.value)} />
            <button> Add </button>
        </form>
    )
}
export default AddList;