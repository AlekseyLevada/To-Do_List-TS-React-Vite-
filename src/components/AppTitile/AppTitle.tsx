import styles from "./styles/style.module.scss"

export const AppTitle: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className={styles.appTitle}>
        Список задач
      </h1>
    </>
  )
}