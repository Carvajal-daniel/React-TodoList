
export const TodoFilter = ({ changeFilter, filter }) => {

const classFilter = 'text-blue-800 font-bold text-lg dark:text-red-600'


  return (
    <section className="container mx-auto px-4 mt-8 ">
      <div className='bg-white p-4 rounded-md flex justify-center gap-4 items-center dark:bg-gray-800 dark:text-gray-200 transition-all duration-150 '>

        <button
          onClick={() => changeFilter('all')}
          className={`${filter === 'all' ? classFilter : ''}`}>
          All
        </button>

        <button
          onClick={() => changeFilter('active')}
          className={` ${filter === 'active' ? classFilter : ''}`}
          >
          Activas
        </button>

        <button
        onClick={() =>changeFilter('complete')}
        className={` ${filter === 'complete' ? classFilter : ''}`}
        >
          Completadas
        </button>
      </div>
    </section>

  )
}
