function TaskItem({ task, handleEdit, handleDone, handleDelete }) {
  return (
    <tr className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 text-base flex flex-col lg:table-row rounded-xl mb-4">
      <th
        scope="row"
        className="px-1 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center text-wrap"
      >
        {task.name}
      </th>
      <td className="px-1 sm:px-6 py-4 text-center">{task.dueDate}</td>
      <td className="px-1 sm:px-6 py-4 text-center">
        {task.isCompleted ? "Completed" : "Pending"}
      </td>
      <td className="px-1 sm:px-6 py-4">
        <div className="flex justify-center">
          <button
            className="bg-amber-500 hover:bg-amber-400 p-3 py-1 text-white rounded-md font-medium h-[40px] mr-2"
            onClick={() => handleEdit(task.name)}
          >
            Edit
          </button>
          <button
            className="bg-[#c61919] hover:bg-[#f74343] p-3 py-1 text-white rounded-md font-medium h-[40px] mr-2"
            onClick={() => handleDelete(task.name)}
          >
            Delete
          </button>
          <button
            className="bg-emerald-700 hover:bg-emerald-600 p-3 py-1 text-white rounded-md font-medium h-[40px] text-nowrap"
            onClick={() => handleDone(task.name)}
          >
            {task.isCompleted ? "Mark As Pending" : "Mark As Done"}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TaskItem;
