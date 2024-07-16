import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Container from "../../ui/Container";
import { addTask, getTasks } from "./todo.";
import { IoCheckmark } from "react-icons/io5";
import { CiEdit, CiTrash } from "react-icons/ci";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

const TodoApp = () => {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      alert("New task added");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {
      alert("New task cannot be added");
    },
  });

  const { register, handleSubmit } = useForm();

  const handleAddTask = (data) => {
    mutate({ ...data, user_photo: data.user_photo[0] });
  };
  const onError = (data) => {
    console.log(data);
  };

  const completedTasks =
    tasks?.filter((task) => task.is_checked === true) || [];

  return (
    <Container>
      <div className="h-screen flex flex-col gap-5">
        <div className="flex justify-start items-center gap-1">
          <span className="size-4 rounded-full border border-black p-0.5">
            <IoCheckmark />
          </span>{" "}
          {completedTasks.length} task
        </div>
        <div className="">
          <h4>Tasks</h4>
          <ul className="flex-col items-start gap-8">
            {tasks?.map((task) => (
              <li
                key={task.id}
                className="grid grid-cols-[24px_1fr] place-items-start"
              >
                <button className="flex justify-center items-center">
                  <span className="size-[18px] rounded-full border border-black flex items-center group">
                    <span className="scale-0 group-hover:scale-100 transition">
                      <IoCheckmark />
                    </span>
                  </span>
                </button>
                <div className="flex gap-3">
                  <span className="size-10">
                    <img src={task.user_photo} alt="user" />
                  </span>
                  <h6>{task.title}</h6>
                  <p>{task.task}</p>
                </div>
                <div className="flex gap-4">
                  <button className="size-6">
                    <CiEdit />
                  </button>
                  <button className="size-6">
                    <CiTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Add task</h4>
          <form onSubmit={handleSubmit(handleAddTask, onError)}>
            <label htmlFor="title">
              Title
              <div className="border rounded-md px-2 py-1">
                <input
                  type="text"
                  id="title"
                  {...register("title", {
                    required: "Please enter a title",
                  })}
                />
              </div>
            </label>
            <label htmlFor="task">
              Task
              <div className="border rounded-md px-2 py-1">
                <input
                  type="text"
                  id="task"
                  {...register("task", {
                    required: "Please enter a task description",
                  })}
                />
              </div>
            </label>
            <label htmlFor="user_photo">
              User photo
              <div>
                <input
                  type="file"
                  id="user_photo"
                  accept="image/*"
                  {...register("user_photo")}
                />
              </div>
            </label>
            <Button style="secondary-regular" size="sm">
              Add
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default TodoApp;
