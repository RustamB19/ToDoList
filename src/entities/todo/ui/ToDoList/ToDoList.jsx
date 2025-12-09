import {memo, useContext} from 'react'
import {ToDoItem,TasksContext} from "@/entities/todo";


const ToDoList = (props) => {

    const {styles} = props

    const {
        tasks,
        filteredTasks
    } = useContext(TasksContext);
    
    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0
    if (!hasTasks) {
        return (
            <div className={styles.emptyMessage}>Задач пока нет. Создайте новую задачу</div>
        )
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return <div className={styles.emptyMessage}>Задачи не были найдены</div>
    }

    return (
        <ul className={styles.list}>
        {(filteredTasks ?? tasks).map((task) => (
          <ToDoItem 
          className = {styles.item}
          id = {task.id}
          key = {task.id}
          title = {task.title}
          isDone = {task.isDone}

          />
        ))}
        
      </ul>
    )
}

export default memo(ToDoList)