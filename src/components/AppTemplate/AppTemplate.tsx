import styles from './styles/style.module.scss'
import { AppTitle } from '../AppTitile/AppTitle'
import { useToDoStore } from '../../store/ToDoStore/ToDoStore'
import { InputWindow } from '../InputWindow/Inputwindow'
import { TaskItem } from '../TaskItem/TaskItem'
import { Filters } from '../Filters/Filters'

export const AppTemplate: React.FC = (): JSX.Element => {

  const createTask = useToDoStore(state => state.createTask)
  const tasks = useToDoStore(state => state.tasks)
  const filteredTasks = useToDoStore(state => state.filteredTasks)

  console.log(tasks);
  

  return (
    <>
      <article className={styles.appTemplate}>
        <div className={styles.appTemplateTop}>
          <AppTitle />
          <InputWindow onAdd={(title: string) => title && title !== "" ? createTask(title) : null} />
          <ul className={styles.appTemplateList}>
            {
              filteredTasks.map((task) => {
                return (
                  <TaskItem key={task.id} id={task.id} title={task.title} isChecked={task.checked} />
                )
              })
            }
          </ul>
        </div>
        <Filters />
        <div className={styles.appTemplateMessages}>
          {
            tasks.length === 0 && <p className={styles.appTemplateMessageLost}>У Вас нет активных задач! Пора что-то запланировать.</p>
          }
          {
            tasks.length > 0 && <p className={styles.appTemplateMessageLength}>Всего задач: {tasks.length}</p>
          }
        </div>
      </article>
    </>
  )
}