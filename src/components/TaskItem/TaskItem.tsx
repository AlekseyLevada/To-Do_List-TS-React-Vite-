import { useState } from "react"
import styles from "./styles/style.module.scss"
import ItaskItemProps from "./types/ITaskItemProsp"
import { useToDoStore } from "../../store/ToDoStore/ToDoStore"

export const TaskItem: React.FC<ItaskItemProps> = ({ id, title }): JSX.Element => {

  const updateTask = useToDoStore(state => state.updateTask)
  const removeTask = useToDoStore(state => state.removeTask)

  const [checked, setChecked] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(title)


  return (
    <>
      <div id={id} className={styles.taskItem}>
        <label className={styles.taskItemInputLabel}>
          <input
            type="checkbox"
            name="checkbox"
            className={styles.taskItemCheckbox}
            onChange={(e) => setChecked(e.target.checked)}
            disabled={editMode} />
          {
            editMode ?
              <input
                type="text"
                name="editInput"
                className={styles.taskItemEditInput}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
              :
              <div
                className={checked ? `${styles.taskItemTitle} ${styles.isChecked}` : `${styles.taskItemTitle}`}>{title}</div>
          }
        </label>
        <div className={styles.taskItemControl}>
          {
            editMode ?
              <button
                className={styles.taskItemControlItem}
                onClick={() => setTimeout(() => { updateTask(id, value); setEditMode(false) }, 300)}
                area-label="Save">
              </button>
              :
              <button
                className={styles.taskItemControlItem}
                onClick={() => setTimeout(() => { setEditMode(true) }, 300)}
                area-label="Edit"
                disabled={checked}>
              </button>
          }
          <button
            className={styles.taskItemControlItem}
            onClick={() => setTimeout(() => { removeTask(id) }, 300)}
            area-label="Delete"
            disabled={!checked}>
          </button>
        </div>
      </div>
    </>
  )
}