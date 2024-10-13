import ITask from "./ITask";

interface IToDoStore {
  tasks: ITask[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export default IToDoStore