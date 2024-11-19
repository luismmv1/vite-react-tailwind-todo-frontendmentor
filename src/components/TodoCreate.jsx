import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = (e)=>{
        e.preventDefault();

        if (!title.trim()){
            return setTitle('');
        }else{
            createTodo(title);
            setTitle('');
        }
        /* otra opcion valida es: 
        if(title.trim().length>0){
            createTodo(title);
            setTitle('');
        }
        setTitle(''); */
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="rounded-full border-2 inline-block h-5 w-5"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
);
};
export default TodoCreate;
