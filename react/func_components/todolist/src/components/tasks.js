import React from "react";

const Tasks = (props) => {
    const {allTasks, remove, handleCheck } = props;

    return  (
        <div>
            { allTasks.map( (item, index)  => (
                <div key={item.id} >
                    <form>
                    <input type="checkbox"  name="task" onChange={ () => handleCheck(item)} />
                    <label for="task" className={item.completed ? "completed" : ""}> {item.task} </label>
                    </form>
                    <button onClick={()=> remove(item.id)}>Delete</button>
                </div> 
                ))}

        </div>
    )
}

export default Tasks;