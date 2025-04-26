import React, { useState } from 'react'
import { Button } from './button';
import ConfettiExplosion from 'react-confetti-explosion';

interface ListProps {
  items: string[];
  onSendList: (list: string[]) => void;
}

const List = ({ items, onSendList }: ListProps) => {
  const [isExploding, setIsExploding] = useState(false);
  const completeTask = (index: number) => {
    const newList = [...items];
    newList.splice(index, 1);
    onSendList(newList);
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 2000);
  }
  return (
    <div>
        {items.map((task, index) => (
          <>
            <button key={index} onClick={() => completeTask(index)}>{task}</button>
            <br/>
          </>
        ))}
        {isExploding && <ConfettiExplosion />}
    </div>
  )
}

export default List;