import ITask from "./ITask";

interface IToDoStore {
  tasks: ITask[];
  tasksFilter: "all" | "active" | "complited";
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  toggleCheckedStatus: (id: string, status: boolean) => void;
  setFilterStatus: (value: "all" | "active" | "complited") => void;
}

export default IToDoStore