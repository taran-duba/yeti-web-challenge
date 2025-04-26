import React from 'react'
import { Button } from './button';

interface ListProps {
  items: string[];
  onSendList: (list: string[]) => void;
}

const List = ({ items, onSendList }: ListProps) => {
  var list: string[] = [];
  const completeTask = (index: number) => {
    list.splice(index, 1);
    onSendList(list);
  }
  return (
    <div>
        {items.map((task, index) => (
          <>
            <Button key={index} onClick={() => completeTask(index)}>{task}</Button>
            <br />
          </>
        ))}
    </div>
  )
}

export default List;