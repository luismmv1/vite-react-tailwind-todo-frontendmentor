import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos=[
  { id: 1, title: "Complete online JavaScript Course", completed: true},
  { id: 2, title: "Job around the park 3x", completed: false},
  { id: 3, title: "10 minutes mediatotion", completed: false},
  { id: 4, title: "Read For 1 hour", completed: false},
  { id: 5, title: "Pick up groceries", completed: false},
  { id: 6, title: "Complete Todo App On Frontend Mentor", completed: false}
];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
  
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return(
    
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain dark:bg-gray-900 transition-all duration-1000">
      <Header/>
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo}/>       
        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
      </main>
      <TodoFilter changeFilter={changeFilter} filter={filter}/>
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">Drag and drop to reorder list</footer>
        
    </div>  
  )
}; 

export default App;