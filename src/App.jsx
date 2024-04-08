import { useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTask from "./components/AddTask";
import FilterDel from "./components/FilterDel";
import TaskTable from "./components/TaskTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [taskItems, setTaskItems] = useState([]);
  let [editBool, setEditBool] = useState(0);

  useEffect(() => {
    let taskString = localStorage.getItem("tasks");
    if (taskString) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      setTaskItems(tasks);
    }
  }, []);

  const toggleEdit = () => {
    setEditBool(editBool === 0 ? 1 : 0);
  };

  const saveToLS = (list) => {
    localStorage.setItem("tasks", JSON.stringify(list));
  };

  const handleTaskAdd = (taskName, taskDate) => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    if (taskDate === "") {
      taskDate = "No due date";
    }
    let task = { name: taskName, dueDate: taskDate, isCompleted: false };
    if (tasks) {
      let clonedTaskItems = [...tasks, task];
      setTaskItems([...clonedTaskItems]);
      saveToLS(clonedTaskItems);
    } else {
      setTaskItems([task]);
      saveToLS([task]);
    }
  };

  const handleFilter = (category) => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    if (category === "All") {
      setTaskItems(tasks);
    } else if (category === "Pending") {
      let pendingTasks = tasks.filter((task) => !task.isCompleted);
      setTaskItems(pendingTasks);
    } else if (category === "Completed") {
      let completedTasks = tasks.filter((task) => task.isCompleted);
      setTaskItems(completedTasks);
    }
  };

  const handleDeleteAll = () => {
    if (taskItems.length === 0) {
      toast.error("Nothing to delete!", {
        toastId: "delete-all",
        position: "top-center",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("All tasks deleted successfully!", {
        position: "top-center",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTaskItems([]);
      saveToLS([]);
    }
  };

  const handleEdit = (taskName) => {
    let taskToEdit = taskItems.filter((task) => task.name === taskName);
    taskToEdit = taskToEdit[0];
    document.getElementById("task-name").value = taskToEdit.name;
    document.getElementById("task-deadline").value =
      taskToEdit.dueDate !== "No due date" ? taskToEdit.dueDate : "";
    toggleEdit();
    let updatedTasks = taskItems.filter((task) => task.name !== taskName);
    setTaskItems(updatedTasks);
    saveToLS(updatedTasks);
  };

  const handleDelete = (taskName) => {
    let updatedTasks = taskItems.filter((task) => task.name !== taskName);
    toast.success("Task deleted successfully!", {
      position: "top-center",
      autoClose: 2800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTaskItems(updatedTasks);
    saveToLS(updatedTasks);
  };

  const handleDone = (taskName) => {
    let clonedTaskItems = [...taskItems];
    clonedTaskItems.every((task) => {
      if (task.name === taskName) {
        if (task.isCompleted) {
          toast.warn("Task marked as pending!", {
            toastId: "pending",
            position: "top-center",
            autoClose: 2800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success("Task marked as completed!", {
            toastId: "completed",
            position: "top-center",
            autoClose: 2800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        task.isCompleted = !task.isCompleted;
        return false;
      }
    });
    setTaskItems(clonedTaskItems);
    saveToLS(clonedTaskItems);
  };

  return (
    <>
      <div className="font-[Poppins] flex items-center h-[100vh] bg-[#2A303C]">
        <div className="container mx-auto my-1.5 rounded-xl p-5 bg-[#4A4F59] text-white shadow-[0_8px_32px_0px_rgba(135,88,255,0.3)] max-w-[60vw]">
          <AppName />
          <AddTask
            handleEnterBtn={handleTaskAdd}
            editBool={editBool}
            toggleEdit={toggleEdit}
          />
          <FilterDel
            handleFilter={handleFilter}
            handleDeleteAll={handleDeleteAll}
          />
          <TaskTable
            taskItems={taskItems}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        </div>
        <ToastContainer
          toastClassName={() =>
            "font-[Poppins] relative flex p-3 min-h-16 rounded-2xl justify-between items-center overflow-hidden bg-[#121212]"
          }
          bodyClassName={() =>
            "font-[Poppins] flex items-center justify-center"
          }
        />
      </div>
    </>
  );
}

export default App;
