import { AddTaskCard } from "@/components/module/task/AddTaskCard"
import TaskCard from "@/components/module/task/TaskCard"
import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

const Tasks = () => {
  const tasks = useAppSelector(selectTasks)
  return (
    <>
      <div className=" my-5 text-2xl font-bold flex justify-center items-center">Tasks</div>
      <div className="flex items-center justify-center my-2">
        <AddTaskCard></AddTaskCard>
      </div>
      <div>
        {
          tasks.map((task) => (
            <TaskCard task={task} key={task.Id}></TaskCard >
          ))
        }
      </div>
    </>
  )
}

export default Tasks