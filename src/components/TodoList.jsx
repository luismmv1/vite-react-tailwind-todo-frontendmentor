import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="rounded-t-md overflow-hidden bg-white [&>article]:p-4 mt-8 dark:bg-gray-800 transition-all duration-1000">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />       
          ))}
        </div>
    );
};
export default TodoList;