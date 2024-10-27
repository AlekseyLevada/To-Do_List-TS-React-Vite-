import { useCallback, useState } from "react"
import styles from "./styles/style.module.scss"
import ItaskItemProps from "./types/ITaskItemProsp"
import { useToDoStore } from "../../store/ToDoStore/ToDoStore"

export const TaskItem: React.FC<ItaskItemProps> = ({ id, title, isChecked }): JSX.Element => {

  const updateTask = useToDoStore(state => state.updateTask)
  const removeTask = useToDoStore(state => state.removeTask)
  const toggleCheckedStatus = useToDoStore(state => state.toggleCheckedStatus)

  const [checked, setChecked] = useState(isChecked)
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(title)

  const editcurrentTask = useCallback(() => {
    setTimeout(() => {
      updateTask(id, value.trim())
      setEditMode(false)
    }, 300)
  }, [value])

  return (
    <>
      <div className={styles.taskItem}>
        <label className={styles.taskItemInputLabel}>
          <input
            checked={checked}
            type="checkbox"
            name="checkbox"
            className={styles.taskItemCheckbox}
            onChange={(e) => { setChecked(e.target.checked); toggleCheckedStatus(id, checked) }}
            disabled={editMode} />
          {
            editMode ?
              <input
                type="text"
                name="editInput"
                className={styles.taskItemEditInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && value !== "" ? editcurrentTask() : null}
              />

              :
              <div
                className={checked ? `${styles.taskItemTitle} ${styles.isChecked}` : `${styles.taskItemTitle}`} title={title} area-label={title} >{title}</div>
          }
        </label>
        <div className={styles.taskItemControl}>
          {
            editMode ?
              <button
                className={styles.taskItemControlItem}
                onClick={() => value !== "" ? editcurrentTask() : alert("Поле новой или редактируемой задачи, не может быть пустым")}
                area-label="Save"
                title="Сохранить"
              >
              </button>
              :
              <button
                className={styles.taskItemControlItem}
                onClick={() => setTimeout(() => { setEditMode(true) }, 300)}
                area-label="Edit"
                title="Редактировать"
                disabled={checked}>
              </button>
          }
          <button
            className={styles.taskItemControlItem}
            onClick={() => setTimeout(() => { removeTask(id) }, 300)}
            area-label="Delete"
            title="Удалить"
            disabled={!checked}>
          </button>
        </div>
      </div>
    </>
  )
}