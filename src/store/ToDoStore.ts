import { create } from "zustand";
import { generateId } from "../services/idGenerator/idGenerator";
import IToDoStore from "./types/IToDoStore";

export const ToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: generateId(),
      title: "Дефолтная задача",
      timeAt: Date.now(),
    }
  ],

  createTask: (title: string) => {
    const { tasks } = get()
    const newTask = { id: generateId(), title: title, timeAt: Date.now() }
    set({
      // tasks: [newTask].concat(tasks)
      tasks: [...tasks, newTask]
    })
  },

  updateTask: (id: string, title: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    })
  },

  removeTask: (id: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.filter((task) => {
        task.id !== id
      })
    })
  }

}))