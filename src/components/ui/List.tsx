import React, { useState } from 'react';
import { Button } from './button';
import { useWindowSize } from 'react-use';
import { useReward } from 'react-rewards';

interface ListProps {
  items: string[];
  onSendList: (list: string[]) => void;
}

const List = ({ items, onSendList }: ListProps) => {
  const [isExploding, setIsExploding] = useState(false);
  const { width, height } = useWindowSize();
  const { reward, isAnimating } = useReward('rewardId', 'confetti');
  const completeTask = (index: number) => {
    console.log("Task completed, index:", index);
    const newList = [...items];
    newList.splice(index, 1);
    onSendList(newList);
    setIsExploding(true);
  }
  return (
    <div>
      {isExploding && (
        <span id='rewardId'></span>
      )}
      {items.map((task, index, _) => (
          <button key={index} className='my-4' onClick={() => completeTask(index)}>{task}</button>
      ))}
    </div>
  )
}

export default List;