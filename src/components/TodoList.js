import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const tasks = props.tasks.map(task => (
      <TodoItem
        key={task.id}
        title={task.title}
        completed={task.completed}
        id={task.id}
        onTitleChange={props.onTitleChange}
        onCompleteChange={props.onCompleteChange}
        onRemove={props.onRemove}
      />
    ));
    return (
        <div className="todo-list">
            {tasks}
        </div>
    )
}

export default TodoList;