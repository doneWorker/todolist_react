import React, {useState} from 'react';

const TodoCreator = (props) => {
    const [text, setText] = useState('');

    // handlers
    const onKeypressHandler = (evt) => evt.which === 13 && onSubmit();
    const onSubmit = () => {
        if(text.length === 0) {
            alert("Task Should not be empty");
            return;
        }
        props.onTaskCreateHandler(text);
        setText("");
    }

    return (
      <div className="todo-add">
        <h3>Create your "TODO" Item</h3>
        <input
          type="text"
          value={text}
          onChange={evt => setText(evt.target.value)}
          onKeyPress={onKeypressHandler}
          placeholder="i.e: Learn Golang"
        />
        <button onClick={onSubmit}>Add</button>
      </div>
    );
}

export default TodoCreator;