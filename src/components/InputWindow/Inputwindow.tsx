import { useCallback, useState } from "react";
import styles from "./styles/style.module.scss"
import IinputWindow from "./types/IInputWiindow"

export const InputWindow: React.FC<IinputWindow> = ({ onAdd }): JSX.Element => {

  const [inputValue, setinputValue] = useState("")

  const addTask = useCallback(() => {
    onAdd(inputValue.trim())
    setinputValue("")
  }, [inputValue])

  return (
    <>
      <div className={styles.inputWindowWrapper}>
        <input className={styles.inputWindow}
          type="text"
          placeholder="Введите название задачи"
          value={inputValue}
          onChange={(e) => { setinputValue(e.target.value) }}
          onKeyDown={(e) => e.key === "Enter" && inputValue !== "" ? addTask() : null} />
        <button className={styles.inputWindowBtn} area-label="Добавить задачу" onClick={() => inputValue !== "" ? addTask() : null} disabled={inputValue === ""}>+</button>
      </div>
    </>
  )
}