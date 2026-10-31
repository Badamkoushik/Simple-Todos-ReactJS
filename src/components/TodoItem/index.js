import './index.css'

const TodoItem = props => {
  const {todosList, deleteList} = props
  const {id, title} = todosList

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="list-container">
      <p className="todo">{title}</p>
      <button className="btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
