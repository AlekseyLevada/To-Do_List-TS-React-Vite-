import { create } from "zustand";
import { generateId } from "../../services/idGenerator/idGenerator";
import IToDoStore from "./types/IToDoStore";

export const useToDoStore = create<IToDoStore>((set, get) => ({
  tasks: [
    {
      id: "hsd7dckf0jc6c1mc0c9mcl2",
      title: "Первая задача",
      timeAt: 5647892156741236
    },
    {
      id: "0xd9dckf1jc9b2mc0c9mca6",
      title: "Вторая задача",
      timeAt: 4681659872356468
    },
    {
      id: "lqd2dckf8jc1w5mc0c9mcqs",
      title: "Третья задача",
      timeAt: 7982465867495498
    }
  ],

  createTask: (title: string) => {
    const { tasks } = get()
    const newTask = { id: generateId(), title: title, timeAt: Date.now() }
    set({
      tasks: [...tasks, newTask]
    })
  },

  updateTask: (id: string, title: string) => set({
    tasks: get().tasks.map((task) => task.id === id ? { ...task, title: title } : { id: task.id, title: task.title, timeAt: task.timeAt })
  }),


  removeTask: (id: string) => {
    const { tasks } = get()
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  }

}))