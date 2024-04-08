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
    <div className="my-5 flex flex-col xl:flex-row gap-3 justify-between items-center w-full">
      <input
        id="task-name"
        type="text"
        className="placecholder:text-[#ffffff4d] w-7/12 min-w-[256px] p-3 py-1 rounded-md bg-[#2A303C] border-[1px] h-[48px] outline-none border-[#8758ff] mr-1"
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
        className="w-64 p-3 py-1 rounded-md bg-[#2A303C] border-[1px] h-[48px] outline-none border-[#8758ff]"
      />
      <button
        id="addBtn"
        className="bg-[#8758ff] hover:bg-[#714bd1] p-3 py-1 text-white rounded-md font-semibold ml-1 h-[48px] w-[100px]"
        onClick={handleTaskAdd}
      >
        {editBool === 1 ? "Edit Task" : "Add Task"}
      </button>
    </div>
  );
}

export default AddTask;
