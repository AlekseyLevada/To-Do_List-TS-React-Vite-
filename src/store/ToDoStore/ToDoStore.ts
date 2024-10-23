import { create } from "zustand";
import { generateId } from "../../services/idGenerator/idGenerator";
import IToDoStore from "./types/IToDoStore";

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: "112",
      title: "Первая задача",
      timeAt: 626265684334
    }
  ],

  createTask: (title: string) => {
    const { tasks } = get()
    const newTask = { id: generateId(), title: title, timeAt: Date.now() }
    set({
      tasks: [...tasks, newTask] // Добвление задачи в конец списка
    })
  },

  updateTask: (id: string, title: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.map(task => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    })
  },

  removeTask: (id: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  }

}))