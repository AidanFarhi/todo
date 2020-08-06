import React from 'react'

function TodoItem(props) {
    console.log(props)
    return (
        <div className='todo-item'>
            <input type='checkbox' checked={props.item.completed} check={()=> props.check(props.item.id)}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
