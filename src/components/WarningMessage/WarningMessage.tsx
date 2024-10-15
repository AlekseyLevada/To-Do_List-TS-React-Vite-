import styles from './styles/style.module.scss'
import { WarningMessageStore } from '../../store/WarningMessageStore/WarningMessageStore'
import IWarningMessageProps from './types/IWarningMessageProps'

export const WarningMessage: React.FC<IWarningMessageProps> = (props): JSX.Element => {

  const changeWarningMessageFlag = WarningMessageStore(state => state.changeWarningMessageFlag)

  return (
    <>
      <div className={styles.warningTemplate}>
        <p className={styles.warningMessage}>{props.message}</p>
        <span className={styles.warningCross} onClick={() => changeWarningMessageFlag()}>+</span>
      </div>
    </>
  )
}