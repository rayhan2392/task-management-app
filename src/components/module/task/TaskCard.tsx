import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, taskCompletionToggle } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { ITask } from "@/types";

interface Iprops {
    task: ITask
}

const TaskCard = ({ task }: Iprops) => {
    const priorityColor = {
        low: 'bg-green-500',
        medium: 'bg-yellow-500',
        high: 'bg-red-500',
    }[task.priority];

    const dispatch = useAppDispatch()

    return (
        <div className="bg-white p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto">
            <div className="flex justify-between items-center mb-3">
                <h2 className={cn("text-xl font-semibold", { "line-through": task.isCompleted === true })}>{task.title}</h2>
                <span className={`text-xs text-white px-3 py-1 rounded-full ${priorityColor}`}>
                    {task.priority.toUpperCase()}
                </span>
                <Checkbox onClick={() => dispatch(taskCompletionToggle(task.Id))} />
                <Button onClick={() => dispatch(deleteTask(task.Id))} className="ml-6" variant='destructive'>Delete</Button>
            </div>

            <p className="text-gray-600 mb-4">{task.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>📅 Due: { }</span>
                <span className={task.isCompleted ? 'text-green-600 font-semibold' : 'text-amber-600 font-semibold'}>
                    {task.isCompleted ? '✅ Completed' : '⏳ Pending'}
                </span>
            </div>
        </div>
    );
};

export default TaskCard;
