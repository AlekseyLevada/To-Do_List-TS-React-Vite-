import styles from "./styles/style.module.scss"
import IAppTitile from "./types/IAppTitile"

export const AppTitle: React.FC<IAppTitile> = ({AppTitle}): JSX.Element => {
  return (
    <>
      <h1 className={styles.appTitle}>
        {AppTitle}
      </h1>
    </>
  )
}