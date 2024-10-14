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
        <div className={styles.appTemplateTop}>
          <AppTitle />
          <InputWindow onAdd={(title: string) => title && title !== "" ? createTask(title) : null} />
          {
            tasks.map(task => {
              return (
                <ul>
                  <li key={task.id}>{task.title}</li>
                </ul>

              )
            })
          }
        </div>
        <div className={styles.appTemplateMessages}>
          {
            tasks.length === 0 && <p className={styles.appTemplateMessageLost}>У Вас нет активных задач! Пора что-то запланировать</p>
          }
          {
            tasks.length > 0 && <p className={styles.appTemplateMessageLength}>Текущих задач: {tasks.length}</p>
          }
        </div>
      </article>
    </>
  )
}