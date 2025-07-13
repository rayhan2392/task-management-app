import { AddTaskCard } from "@/components/module/task/AddTaskCard";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  const dispatch = useAppDispatch();
  // const filter = useAppSelector((state) => state.todo.filter);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">📋 Tasks</h1>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Add Task Button */}
      <div className="flex justify-end mb-6">
        <AddTaskCard />
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.Id} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          No tasks found. Add a new one! 🚀
        </div>
      )}
    </div>
  );
};

export default Tasks;
