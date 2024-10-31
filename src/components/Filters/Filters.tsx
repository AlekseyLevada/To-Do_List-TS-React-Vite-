import styles from "./styles/style.module.scss"
import { useToDoStore } from "../../store/ToDoStore/ToDoStore"

export const Filters: React.FC = (): JSX.Element => {

  const setFilterStatus = useToDoStore(state => state.setFilterStatus)
  const filter = useToDoStore(state => state.tasksFilter)

  return (
    <>
      <div className={styles.filterBtns}>
        <button disabled={filter === "all"} onClick={() => setFilterStatus("all")} className={styles.filterBtn} area-label="All">Все</button>
        <button disabled={filter === "active"} onClick={() => setFilterStatus("active")} className={styles.filterBtn} area-label="Active">Активные</button>
        <button disabled={filter === "complited"} onClick={() => setFilterStatus("complited")} className={styles.filterBtn} area-label="Complited">Завершенные</button>
      </div>
    </>
  )
}