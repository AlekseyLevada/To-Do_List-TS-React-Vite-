import { create } from "zustand";
import { taskData } from "../../services/lib/tasks";
import IToDoStore from "./types/IToDoStore";
import { v4 as uuidv4 } from 'uuid';

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: taskData,

  filter: "all",

  filteredTasks: [],

  createTask: (title: string) => {
    const newTask = { id: uuidv4(), title: title, timeAt: Date.now(), checked: false }
    set({
      tasks: [...get().tasks, newTask],
      filteredTasks: [...get().filteredTasks, newTask]
    })
  },

  updateTask: (id: string, title: string) => set({
    tasks: get().tasks.map((task) => task.id === id ? { ...task, title: title } : task),
    filteredTasks: get().filteredTasks.map((task) => task.id === id ? { ...task, title: title } : task)
  }),


  removeTask: (id: string) => {
    set({
      tasks: get().tasks.filter((task) => task.id !== id),
      filteredTasks: get().filteredTasks.filter(task => task.id !== id)
    })
  },

  toggleCheckedStatus: (id, status) => {
    set({
      tasks: get().tasks.map((task) => task.id === id ? { ...task, checked: !status } : task)
    })
  },

  setFilterStatus: (value: string) => {
    if (value === "all") {
      set({
        filter: value,
        filteredTasks: get().tasks.filter(task => task),
      })
    }
    if (value === "active") {
      set({
        filter: value,
        filteredTasks: get().tasks.filter(task => task.checked === false),
      })
    }
    if (value === "complited") {
      set({
        filter: value,
        filteredTasks: get().tasks.filter(task => task.checked === true),
      })
    }
  },

}))