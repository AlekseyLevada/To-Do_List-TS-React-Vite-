import ITask from "./ITask";

interface IToDoStore {
  tasks: ITask[];
  filteredTasks: ITask[];
  filter: "all" | "active" | "complited";
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  toggleCheckedStatus: (id: string, status: boolean) => void;
  setFilterStatus: (value: string) => void;
}

export default IToDoStore