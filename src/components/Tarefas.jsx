import { TodoItem } from "./TodoItem"

export const Tarefas = ({ todos, updateTodo, removeTask }) => {
  return (
    <div
      className="bg-white rounded-t-md overflow-hidden [&>article]:px-4 [&>article]:h-13 mt-5 "
    >
      {
      todos.map((item, index) => <TodoItem key={index} updateTodo={updateTodo}  item={item} removeTask={removeTask} />)}
    </div>
  )
};
