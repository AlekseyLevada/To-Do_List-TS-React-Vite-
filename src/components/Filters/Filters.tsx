import styles from "./styles/style.module.scss"
import { useToDoStore } from "../../store/ToDoStore/ToDoStore"
import { useEffect } from "react"

export const Filters: React.FC = ():JSX.Element => {

  const setFilterStatus = useToDoStore(state => state.setFilterStatus)

  useEffect(() => {
    setFilterStatus("all")
  }, [])

  return (
    <>
      <div className={styles.filterBtns}>
        <button onClick={() => setFilterStatus("all")} className={styles.filterBtn} area-label="All">Все</button>
        <button onClick={() => setFilterStatus("active")} className={styles.filterBtn} area-label="Active">Активные</button>
        <button onClick={() => setFilterStatus("complited")} className={styles.filterBtn} area-label="Complited">Завершенные</button>
      </div>
    </>
  )
}