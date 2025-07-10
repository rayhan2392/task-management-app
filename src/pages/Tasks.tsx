import TaskCard from "@/components/module/task/TaskCard"
import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

const Tasks = () => {
  const tasks = useAppSelector(selectTasks)
  return (
    <>
    <div className="mx-auto">Tasks</div>
    <div>
       {
        tasks.map((task)=>(
          <TaskCard task={task}></TaskCard >
        ))
       }
    </div>
    </>
  )
}

export default Tasks