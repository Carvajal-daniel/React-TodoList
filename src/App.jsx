import { useEffect, useState } from 'react'
import { AddCreate } from './components/AddCreate'
import { Header } from './components/Header'
import { Tarefas } from './components/Tarefas'
import { TodoComputer } from './components/TodoComputer'
import { TodoFilter } from './components/TodoFilter'
import { v4 } from 'uuid';

// const inicialStateTodos = [
//   { id: 1, title: 'Estudar React', complete: true },
//   { id: 2, title: 'Estudar Redux', complete: false },
//   { id: 3, title: 'Estudar Content Api', complete: false }
// ]

const tasks = JSON.parse(localStorage.getItem('todos')) || []

function App() {

  const [todos, setTodos] = useState(tasks);
  const items = todos.length;
  const [filter, setFilter] = useState('all');

  // -----------------------------------------------------------------

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const changeFilter = (filter) => setFilter(filter)

  const filterTasks = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(item => !item.complete);
      case 'complete':
        return todos.filter(task => task.complete)
    };
  };

  const createTodo = (title) => {
    const newToodo = {
      id: v4(),
      title: title.trim(),
      complete: false,
    };

    setTodos([...todos, newToodo])
  }

  const removeTask = (id => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  })

  const removeTaskComplete = ((item) => {
    setTodos(
      todos.filter((item) => {
        return item.complete !== true
      })
    )
  })

  const updateTodo = (id => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    )
  })

  return (
    <div className="  bg-[url('./assets/images/bg-mobile-light.jpg')]       bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-zinc-900
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />

      <main className="container mx-auto px-4 mt-4 md:w-[700px] md:mx-auto">
        <AddCreate createTodo={createTodo} />

        <Tarefas
          todos={filterTasks()}
          updateTodo={updateTodo}
          removeTask={removeTask} />

        <TodoComputer items={items} removeTaskComplete={removeTaskComplete} />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center dark:text-gray-300">
        Drag and drop
      </footer>
    </div>
  )
}

export default App
