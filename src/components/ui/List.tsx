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
    reward();
  }
  return (
    <div>
      <div className='w-full text-left pl-4 border-2 bg-gray-100 py-2 rounded-lg'>
        {items.map((task, index, _) => (
          <div key={index} className=''>
            <button className='' onClick={() => completeTask(index)}>{task}</button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List;