import { useState } from "react"

export const AddCreate = ({ createTodo }) => {

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim()){
      alert('Digite uma tarefa')
      return setTitle('')
    }
    createTodo(title)
    setTitle('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" dark:bg-gray-800 bg-white rounded-md overflow-hidden py-3 flex items-center gap-3 px-3 transition-all duration-150 ">
      <span className="rounded-full border-2 inline-block w-5 h-5"></span>
      <input
        className="dark:rounded-t-md  dark:bg-gray-800 w-full outline-none text-gray-600 dark:text-gray-200 dark:placeholder:text-gray-300 transition-all duration-150"
        type="text"
        placeholder="Digite uma tarefa.."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>


  )
}
