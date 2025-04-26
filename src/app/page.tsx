"use client";

import { Button } from "@/components/ui/button";
import List from "@/components/ui/List";
import { useState, useEffect, ChangeEvent } from "react";

export default function Home() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("list");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  const clearInput = () => {
    
  }

  const handleNewList = (list: string[]) => {
    setTaskList(list);
    localStorage.setItem("list", JSON.stringify(list));
  }

  const addTask = () => {
    if (taskName.trim()) {
      const newTaskList = [...taskList, taskName];
      setTaskList(newTaskList);
      localStorage.setItem("list", JSON.stringify(newTaskList));
      setTaskName('');
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.currentTarget.value);
  };

  useEffect(() => {
    if (added) {
      addTask();
      setAdded(false);
    }
  }, [added]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">
        To Do
      </h1> 
      <div className="flex justify-between">
        <input placeholder="add a new todo" autoFocus className="mt-3" onChange={handleInputChange} onSubmit={clearInput}/>
        <Button onClick={() => setAdded(true)} type="submit">Add Task</Button>
      </div>
      <br/>
      <List items={taskList} onSendList={handleNewList}/>
    </div>
  );
}
