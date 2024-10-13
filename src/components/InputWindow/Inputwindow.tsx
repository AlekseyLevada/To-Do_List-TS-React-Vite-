import styles from "./styles/style.module.scss"

export const InputWindow:React.FC = ():JSX.Element => {
  return(
    <>
      <div className={styles.inputWindowWrapper}>
        <input className={styles.inputWindow} type="text" placeholder="Введите название задачи"/>
        <button className={styles.inputWindowBtn}>+</button>
      </div>
    </>
  )
}