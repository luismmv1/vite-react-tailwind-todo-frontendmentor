import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [
  { id: 1, title: "Complete online JavaScript Course", completed: true},
  { id: 2, title: "Job around the park 3x", completed: false},
  { id: 3, title: "10 minutes mediatotion", completed: false},
  { id: 4, title: "Read For 1 hour", completed: false},
  { id: 5, title: "Pick up groceries", completed: false},
  { id: 6, title: "Complete Todo App On Frontend Mentor", completed: false},
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

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

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droggableId === destination.droggableId
    )
      return;
    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return(
    
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')]">
      <Header/>
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo}/>       
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
         </DragDropContext> 
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">Drag and drop to reorder list</footer>
    </div>  
  )
}; 

export default App;