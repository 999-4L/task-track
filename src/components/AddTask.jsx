import { toast } from "react-toastify";

function AddTask({ handleEnterBtn, editBool, toggleEdit }) {
  const handleTaskAdd = () => {
    if (document.getElementById("task-name").value === "") {
      toast.error("Please enter a task!", {
        toastId: "add-task-error",
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
      handleEnterBtn(
        document.getElementById("task-name").value,
        document.getElementById("task-deadline").value
      );
      document.getElementById("task-name").value = "";
      document.getElementById("task-deadline").value = "";
      toast.success(
        editBool === 0
          ? "Task added successfully!"
          : "Task edited successfully!",
        {
          toastId: "add-task",
          position: "top-center",
          autoClose: 2800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      if (editBool === 1) {
        toggleEdit();
      }
    }
  };
  return (
    <div className="my-5 grid grid-cols-6 gap-4 lg:grid-cols-12 justify-items-stretch">
      <input
        id="task-name"
        type="text"
        className="placecholder:text-[#ffffff4d] col-span-6 lg:col-span-6 p-3 py-1 rounded-md bg-[#2A303C] border-[1px] h-[48px] outline-none border-[#8758ff]"
        placeholder="What is the task today?"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            document.getElementById("addBtn").click();
          }
        }}
      />
      <input
        id="task-deadline"
        type="date"
        className="col-span-4 lg:col-span-3 p-3 py-1 rounded-md bg-[#2A303C] border-[1px] h-[48px] outline-none border-[#8758ff]"
      />
      <button
        id="addBtn"
        className="col-span-2 lg:col-span-3 bg-[#8758ff] hover:bg-[#714bd1] p-3 py-1 text-white rounded-md font-semibold h-[48px]"
        onClick={handleTaskAdd}
      >
        {editBool === 1 ? "Edit Task" : "Add Task"}
      </button>
    </div>
  );
}

export default AddTask;
