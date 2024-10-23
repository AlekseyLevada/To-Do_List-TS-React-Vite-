import styles from './styles/style.module.scss'
import { AppTitle } from '../AppTitile/AppTitle'
import { useToDoStore } from '../../store/ToDoStore/ToDoStore'
import { InputWindow } from '../InputWindow/Inputwindow'
import { TaskItem } from '../TaskItem/TaskItem'

export const AppTemplate: React.FC = (): JSX.Element => {

  const tasks = useToDoStore(state => state.tasks)
  const createTask = useToDoStore(state => state.createTask)
  const updateTask = useToDoStore(state => state.updateTask)
  const removeTask = useToDoStore(state => state.removeTask)

  return (
    <>
      <article className={styles.appTemplate}>
        <div className={styles.appTemplateTop}>
          <AppTitle />
          <InputWindow
            onAdd={(title: string) => title && title !== "" ? createTask(title) : null} />
          <ul className={styles.appTemplateList}>
            {
              tasks.map(task => {
                return (
                  <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  onDell={() => removeTask(task.id)}
                  onEdit={() => updateTask(task.id, task.title)} />
                )
              })
            }
          </ul>
        </div>
        <div className={styles.appTemplateMessages}>
          {
            tasks.length === 0 && <p className={styles.appTemplateMessageLost}>У Вас нет активных задач! Пора что-то запланировать.</p>
          }
          {
            tasks.length > 0 && <p className={styles.appTemplateMessageLength}>Текущих задач: {tasks.length}</p>
          }
        </div>
      </article>
    </>
  )
}