import { create } from "zustand";
import { taskData } from "../../services/lib/tasks";
import IToDoStore from "./types/IToDoStore";
import { v4 as uuidv4 } from 'uuid';

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: taskData,
  tasksFilter: "all",

  createTask: (title: string) => {
    const newTask = { id: uuidv4(), title: title, timeAt: Date.now(), checked: false }
    set({
      tasks: [newTask, ...get().tasks]
    })
  },

  updateTask: (id: string, title: string) => set({
    tasks: get().tasks.map((task) => task.id === id ? { ...task, title: title } : task)
  }),


  removeTask: (id: string) => {
    set({
      tasks: get().tasks.filter((task) => task.id !== id)
    })
  },

  toggleCheckedStatus: (id, status) => {
    set({
      tasks: get().tasks.map((task) => task.id === id ? { ...task, checked: !status } : task)
    })
  },

  setFilterStatus: (value: "all" | "active" | "complited") => {
    set({
      tasksFilter: value
    })
  },

}))