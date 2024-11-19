import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";
import React from "react";

const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {
  
    const {id, title, completed}=todo;
    return (
        <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-300 ">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${completed
                    ? "flex justify-center items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "inline-block"
                    }`}
                onClick={()=> updateTodo(id)}
            >
                {completed && <IconCheck/>}
            </button>
            <p className={`grow text-gray-500 dark:text-gray-400 transition-all duration-1000 ${completed && "line-through"}`}>{title}</p>
            <button
                onClick={() => removeTodo(id)} className="flex-none"
            >
                <IconCross/>
            </button>
        </article>
    );
})
export default TodoItem;