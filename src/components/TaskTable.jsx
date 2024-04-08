import TaskItem from "./TaskItem";

function TaskTable({ taskItems, handleEdit, handleDone, handleDelete }) {
  return (
    <div className="relative overflow-x-auto sm:rounded-xl tasks">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-white dark:bg-gray-900 text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Task
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Due Date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {taskItems.length === 0 ? (
            <tr className="bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 text-white">
              <td
                colSpan={4}
                className="px-6 py-4 text-center text-base font-medium"
              >
                No tasks found. Enjoy your day!
              </td>
            </tr>
          ) : (
            taskItems.map((task) => (
              <TaskItem
                key={task.name}
                task={task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
