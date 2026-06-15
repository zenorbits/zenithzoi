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

  const addSet = (eIdx: number) => {
    const updated = [...exercises];

    updated[eIdx].sets.push({
      setNumber: updated[eIdx].sets.length + 1,
      reps: 0
    });

    setExercises(updated);
  }

  const removeExercise = (eIdx: number) => {

    const updated = exercises.filter((_, index) => index !== eIdx);

    setExercises(updated);

  }

  const removeSet = (eIdx: number, sIdx: number) => {

    const updated = [...exercises];

    updated[eIdx].sets = updated[eIdx].sets.filter((_, index) => index !== sIdx).map((set,index)=>({...set,setNumber:index+1}));

    setExercises(updated);
  }

  const updateName = (eIdx: number, name: string) => {

    const updated = [...exercises];

    updated[eIdx].name = name;

    setExercises(updated);
  }

  const updateSet = (eIdx: number, sIdx: number, field: "reps" | "weight", value: number) => {
    const updated = [...exercises];
    updated[eIdx].sets[sIdx][field] = value;
    setExercises(updated);

  }
  return (
    <div>page</div>
  )
}

export default WorkoutsPage