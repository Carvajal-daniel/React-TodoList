import { Cross } from "./Icons/Cross"
import { IconCheck } from "./Icons/IconCheck"

export const TodoItem = ({ item, updateTodo, removeTask }) => {


  const classTrue = ' rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center border-black w-6 h-6';
  const classFalse = "rounded-full border-2 flex items-center justify-center border-black w-6 h-6";

  return (
    <article
      className=" dark:bg-gray-800 dark:text-gray-300 flex justify-between items-center text-gray-700 border-b dark:border-gray-600 py-4 transition-all duration-150 ">
      <button
        onClick={() => updateTodo(item.id)}
        className={`dark:border-gray-300 ${item.complete ? classTrue : classFalse}`} >
        {
          item.complete && <IconCheck />
        }
      </button>
      <p className={`${item.complete ? 'line-through text-gray-400 dark:text-gray-500' : ''}`}>
        {item.title}
      </p>
      <button
        onClick={() => removeTask(item.id)}
      >
        <Cross/>
      </button>
    </article>
  )
}
