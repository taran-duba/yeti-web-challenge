import React from 'react'
import { Button } from './button';

const List = ({ items }) => {
  var list = [];
  const completeTask = (index) => {
    list.splice(index, 1);
  }
  return (
    <div>
        {items.map((task, index) => (
          <Button key={index} onClick={completeTask(index)}>{task}</Button>
        ))}
    </div>
  )
}

export default List;