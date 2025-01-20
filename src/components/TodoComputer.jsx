
export const TodoComputer = ({ items, removeTaskComplete }) => {
  return (
    <section className='py-4 rounded-b-md px-4 flex justify-between bg-white dark:bg-gray-800 transition-all duration-150'>
      <span className='text-gray-500  dark:text-gray-200'>{` tarefas: ${items}`}</span>
      <button
        onClick={() =>removeTaskComplete(items)}
        className='text-gray-500 hover:text-red-500  dark:text-gray-200'>Eliminar tarefas completadas
      </button>
    </section>
  )
}
