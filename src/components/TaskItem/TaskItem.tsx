import { useState } from "react"
import styles from "./styles/style.module.scss"
import ItaskItemProps from "./types/ITaskItemProsp"

export const TaskItem: React.FC<ItaskItemProps> = ({ id, title, onDell }): JSX.Element => {

  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState(false)
  const [editMode, setEditMode] = useState(false)

  return (
    <>
      <div className={styles.taskItem}>
        <label className={styles.taskItemInputLabel}>
          <input id={id} className={styles.taskItemCheckbox} type="checkbox" onChange={(e) => setChecked(e.target.checked)}/>
          {
            editMode? <input className={styles.taskItemEditInput} type="text" />
            :
            <div className={styles.taskItemTitle}>{title}</div>
          }
        </label>
        <div className={styles.taskItemControl}>
          <button className={styles.taskItemControlItem} onClick={() => setTimeout(() => {setEditMode(true)}, 300)} area-label="Edit" disabled={checked === false}></button>
          <button className={styles.taskItemControlItem} onClick={() => setTimeout(() => {onDell(id)}, 300)} area-label="Delete" disabled={checked === false}></button>
        </div>
      </div>
    </>
  )
}