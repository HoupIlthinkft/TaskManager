import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface TaskIntf {
    header: string,
    content: string,
    priority: "low" | "medium" | "high",
    deadline: string,
}

interface AddTaskIntf {
    date: string,
    content: TaskIntf,
}

interface TasksCollectionIntf {
    date: string,
    tasks: TaskIntf[],
}

export const useTasksStore = create(
    immer((set) => ({
        tasksOnWeeklyCollections: [],
        setTasksOnWeeklyCollections: (tasks) => set((state) => {state.tasksOnWeeklyCollections = tasks}),
        tasksCustomRangeCollections: [],
        setTasksCustomRangeCollections: (tasks) => set((state) => {state.tasksCustomRangeCollections = tasks}),
    }))
)

export const useNotificationStore = create(
    immer((set) => ({
        notificationActivity: false,
        setNotificationActivity: (activity) => set((state) => {state.notificationActivity = activity}),
        notificationContent: {
            typeNotification: "",
            content: "",
        },
        setNotificationContent: (content) => set((state) => {state.notificationContent = {typeNotification: content[0], content: content[1]}}),
    }))
)

export type { TaskIntf, TasksCollectionIntf, AddTaskIntf };
