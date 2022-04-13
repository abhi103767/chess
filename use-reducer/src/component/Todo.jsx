import { useState } from "react";
const Todo = () => {
    const [task, setTask] = useState("");
    const handleChange = (e) => {
        // setTask(e.target.value)
        // console.log(e)
        console.log("i am here")

    }
    return (
        <>
            <input type={"text"} placeholder="enter todo name" onChange={handleChange} />
            <button >ADD</button>
        </>
    );
}
export default Todo;