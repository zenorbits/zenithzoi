"use client"

import React, { useState } from 'react'

type Tab = "log" | "past";

interface Set {
  setNumber: number;
  reps: number;
  weight?: number;
}

interface Exercise {
  name: string;
  sets: Set[];
  notes?: string;
}


const WorkoutsPage = () => {

  const [activeTab, setActiveTab] = useState<Tab>('log');
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: "", sets: [{ setNumber: 1, reps: 0 }] }
  ]);
  const [workoutNotes, setWorkoutNotes] = useState("");

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: [{ setNumber: 1, reps: 0 }] }]);
  }

  const addSet = (eIdx:number) => {
    const updated = [...exercises];

    updated[eIdx].sets.push({
      setNumber:updated[eIdx].sets.length+1,
      reps:0
    });

    setExercises(updated);
  }

  return (
    <div>page</div>
  )
}

export default WorkoutsPage