import React, {useState} from 'react';

const TodoItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [completed, setCompleted] = useState(props.completed);

    const classNames = ["todo-item"];
    if(completed) classNames.push('completed');

    const onTitleChange = (evt) => {
        setTitle(evt.target.value);
        props.onTitleChange(props.id, evt.target.value);
    }

    const onCompleteChange = () => {
      setCompleted(!completed);
      props.onCompleteChange(props.id, !completed);
    };
    
    return (
      <div className={classNames.join(" ")}>
        <div className="todo-text">
          <input value={title} onChange={onTitleChange}></input>
        </div>
        <div className="todo-helpers">
          <span className="todo-complete" onClick={onCompleteChange}>
            <i className="fa fa-check"></i>
          </span>
          <span className="todo-remove" onClick={() => props.onRemove(props.id)} >
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </div>
    );
}

export default TodoItem;