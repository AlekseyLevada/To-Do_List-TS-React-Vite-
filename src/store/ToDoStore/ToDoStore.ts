import { create } from "zustand";
import IToDoStore from "./types/IToDoStore";
import { v4 as uuidv4 } from 'uuid';

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: "cc7b5d46-c21e-42c0-be7d-2f533f3c7e7f",
      title: "Первая задача",
      timeAt: 5647892156741236,
      checked: false,
    },
    {
      id: "e0a2cd29-1278-40b3-a55e-ec5cebf077c4",
      title: "Вторая задача",
      timeAt: 4681659872356468,
      checked: false,
    },
    {
      id: "a9bd0a0a-6b83-4c9c-bda1-95519c5e6474",
      title: "Третья задача",
      timeAt: 7982465867495498,
      checked: false,
    }
  ],

  createTask: (title: string) => {
    const { tasks } = get()
    const newTask = { id: uuidv4(), title: title, timeAt: Date.now(), checked: false }
    set({
      tasks: [...tasks, newTask]
    })
  },

  updateTask: (id: string, title: string) => set({
    tasks: get().tasks.map((task) => task.id === id ? { ...task, title: title } : { id: task.id, title: task.title, timeAt: task.timeAt, checked: task.checked })
  }),


  removeTask: (id: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  },

  toggleCheckedStatus: (id, status) => {
    set({
      tasks: get().tasks.map(task => task.id === id? { ...task, checked:!status} : { id: task.id, title: task.title, timeAt: task.timeAt, checked: task.checked})
    })
  },

}))