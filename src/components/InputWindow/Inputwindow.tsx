import styles from "./styles/style.module.scss"
import { useCallback, useState } from "react";
import IinputWindow from "./types/IInputWiindow"

export const InputWindow: React.FC<IinputWindow> = ({ onAdd }): JSX.Element => {

  const [inputValue, setInputValue] = useState("")

  const addTask = useCallback(() => {
    setTimeout(() => {
      onAdd(inputValue.trim())
      setInputValue("")
    }, 300)
  }, [inputValue])

  return (
    <>
      <div className={styles.inputWindowWrapper}>
        <input
          className={styles.inputWindow}
          name="inputWindow"
          type="text"
          title="Введите название задачи"
          placeholder="Введите название задачи"
          value={inputValue}
          maxLength={100}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && inputValue !== "" ? addTask() : null} />
        <button
          className={styles.inputWindowBtn}
          area-label="Добавить задачу"
          title="Добавить задачу"
          onClick={() => inputValue !== "" ? addTask() : null}
          disabled={inputValue === ""}>+
        </button>
      </div>
    </>
  )
}