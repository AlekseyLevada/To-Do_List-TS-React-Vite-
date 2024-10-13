import styles from './styles/style.module.scss'
import { AppTitle } from '../AppTitile/AppTitle'
import { ToDoStore } from '../../store/ToDoStore'
import { InputWindow } from '../InputWindow/Inputwindow'

export const AppTemplate: React.FC = (): JSX.Element => {

  const tasks = ToDoStore(state => state.tasks)
  const createTask = ToDoStore(state => state.createTask)
  const updateTask = ToDoStore(state => state.updateTask)
  const removeTask = ToDoStore(state => state.removeTask)

  return (
    <>
      <article className={styles.appTemplate}>
        <AppTitle />
        <InputWindow/>
        {
          tasks.map(task => {
            return(
              <li key={task.id} className={styles.number}>
                {task.title}
              </li>
            )
          })
        }
      </article>
    </>
  )
}