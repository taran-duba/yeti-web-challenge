"use client";

import { Button } from "@/components/ui/button";
import List from "@/components/ui/List";
import { useState, useEffect } from "react";

export default function Home() {
  var taskList = [];
  const addTask = () => {
    taskList.push(taskName);
  }
  const [taskName, setTaskName] = useState('');
  const [added, setAdded] = useState(false);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  useEffect(() => {
    if (added) {
      addTask();
      localStorage.setItem("list", taskList);
      setAdded(false);
    }
  }, [added]);


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        To Do
      </h1>
      <div className="flex justify-between">
        <input placeholder="Task..." autoFocus className="mt-3" onChange={handleInputChange}/>
        <Button onClick={() => setAdded(true)} type="submit">Add Task</Button>
      </div>
      <List items={taskList}/>
    </div>
  );
}
