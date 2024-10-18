import { useState } from "react"
import styles from "./styles/style.module.scss"
import ItaskItemProps from "./types/ITaskItemProsp"

export const TaskItem: React.FC<ItaskItemProps> = ({ id, title, onDell, onEdit }): JSX.Element => {

  const [checked, setChecked] = useState(false)

  return (
    <>
      <label htmlFor={id} className={styles.taskItemWrapper}>
        <div className={styles.taskItem}>
          <label className={styles.taskItemCheckboxWrapper}>
            <input id={id} className={styles.taskItemCheckbox} type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
          </label>
          <div className={styles.taskItemTitle}>
            {title}
          </div>
          <div className={styles.taskItemControl}>
            <button className={styles.taskItemControlItem} onClick={() => onEdit(id, title)} area-label="Edit" disabled={checked === false}></button>
            <button className={styles.taskItemControlItem} onClick={() => onDell(id)} area-label="Delete" disabled={checked === false}></button>
          </div>
        </div>
      </label>
    </>
  )
}