import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";

const 
Todo = () => {
    const [value,setValue] = useState("");
    const [todos,setTodos] = useState([]);

    // const onDelete=(id)=>{
    //     let newTodods=todos.filter((todo)=>todo.id !==id);
    //     setTodos(newTodods);
    // }
  return (
  <>
    <div className={styles.todoList}>
    {todos.map((todo)=>(
        <TodoItem key={todos.id} todo={todo}/>
    ))}
</div>

<div className={styles.container}>
        {/* Todo */}
        <input className={styles.input} placeholder="write somthing"value={value}onChange={(e)=>{
            setValue(e.target.value);
        }}
        />
        <button className={styles.btn}
          onClick={()=>{
              setTodos([...todos,{id:Date.now(),value:value}]);
              setValue("");
          }}
          >+</button>
         {/* <div className={styles.todoList}>
             {todos.map((todo)=>(
                 <TodoItem key={todos.id} todo={todo}onDelete={onDelete}/>
             ))}
         </div> */}
    </div>
    </>
  )
}
export default Todo;
