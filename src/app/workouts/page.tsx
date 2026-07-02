"use client"

import { useAddWorkoutMutation } from '@/store/api/workoutApi';
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

  const [addWorkout, { isLoading }] = useAddWorkoutMutation();

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
    setExercises(exercises.filter((_, index) => index !== eIdx));
  }

  const removeSet = (eIdx: number, sIdx: number) => {
    const updated = [...exercises];
    updated[eIdx].sets = updated[eIdx].sets
      .filter((_, index) => index !== sIdx)
      .map((set, index) => ({ ...set, setNumber: index + 1 }));
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

  const saveWorkout = async () => {
    await addWorkout({
      date,
      exercises,
      notes: workoutNotes
    });

    setExercises([{ name: "", sets: [{ setNumber: 1, reps: 0 }] }]);
    setWorkoutNotes("");
    setDate(new Date().toISOString().split("T")[0]);
  }

  return (
    <div className='relative min-h-screen w-full bg-[#111] font-mono text-white'>

      {/* Header */}
      <div className="border-b-2 border-[#A2E8DD] px-4 py-6">
        <h1 className='text-[#A2E8DD] text-3xl font-bold uppercase tracking-widest'>Workout Log</h1>
        <p className='text-gray-500 text-xs mt-1 uppercase tracking-widest'>Track your grind. No excuses.</p>
      </div>

      {/* Tabs */}
      <div className='flex border-b border-white/10'>
        <button
          className={`px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'log' ? 'bg-[#A2E8DD] text-black' : 'text-gray-500 hover:text-[#A2E8DD]'}`}
          onClick={() => setActiveTab('log')}
        >
          Log Workout
        </button>
        <button
          className={`px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'past' ? 'bg-[#A2E8DD] text-black' : 'text-gray-500 hover:text-[#A2E8DD]'}`}
          onClick={() => setActiveTab('past')}
        >
          Past Workout
        </button>
      </div>

      {/* Content */}
      <div className='p-4 md:p-6 max-w-2xl mx-auto'>
        {activeTab === 'log' ? (
          <div className='space-y-4'>

            {/* Date */}
            <div>
              <label className='text-xs uppercase tracking-widest text-[#A2E8DD] mb-2 block'>Date</label>
              <input
                type="date"
                className='bg-[#1a1a1a] text-white px-4 py-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#A2E8DD] text-sm'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Exercises */}
            {exercises.map((ex, eIdx) => (
              <div key={eIdx} className="bg-[#1a1a1a] rounded-xl p-4 space-y-3">

                {/* Exercise header */}
                <div className='flex gap-2 items-center'>
                  <span className='text-[#A2E8DD] font-bold text-sm w-6'>
                    {eIdx + 1}
                  </span>
                  <input
                    type="text"
                    placeholder='Exercise name'
                    value={ex.name}
                    className='bg-[#222] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#A2E8DD] w-full rounded px-3 py-2 placeholder-gray-600'
                    onChange={(e) => updateName(eIdx, e.target.value)}
                  />
                  <button
                    onClick={() => removeExercise(eIdx)}
                    className='text-red-500/60 hover:text-red-400 text-xs transition-all shrink-0'
                  >
                    ✕
                  </button>
                </div>

                {/* Sets header */}
                <div className='grid grid-cols-3 gap-2 text-xs uppercase tracking-widest text-gray-600 px-7'>
                  <span>Set</span>
                  <span>Reps</span>
                  <span>kg</span>
                </div>

                {/* Sets */}
                {ex.sets.map((set, sIdx) => (
                  <div key={sIdx} className='grid grid-cols-3 gap-2 items-center px-7'>
                    <span className="text-[#A2E8DD] text-sm font-bold">{set.setNumber}</span>
                    <input
                      type="number"
                      placeholder="0"
                      value={set.reps || ''}
                      onChange={(e) => updateSet(eIdx, sIdx, "reps", +e.target.value)}
                      className='bg-[#222] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#A2E8DD] rounded px-3 py-1 placeholder-gray-700 w-full'
                    />
                    <div className='flex items-center gap-1'>
                      <input
                        type="number"
                        placeholder="—"
                        value={set.weight || ''}
                        onChange={(e) => updateSet(eIdx, sIdx, "weight", +e.target.value)}
                        className='bg-[#222] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#A2E8DD] rounded px-3 py-1 placeholder-gray-700 w-full'
                      />
                      <button
                        onClick={() => removeSet(eIdx, sIdx)}
                        className='text-gray-700 hover:text-red-400 text-xs transition-all'
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add Set */}
                <button
                  onClick={() => addSet(eIdx)}
                  className='text-xs uppercase tracking-widest text-[#A2E8DD]/60 hover:text-[#A2E8DD] w-full py-1 transition-all text-center'
                >
                  + Add Set
                </button>
              </div>
            ))}

            {/* Add Exercise */}
            <button
              onClick={addExercise}
              className='w-full bg-[#1a1a1a] hover:bg-[#222] rounded-xl py-4 text-[#A2E8DD] transition-all text-xs uppercase tracking-widest font-bold'
            >
              + Add Exercise
            </button>
            {/* Notes */}
            <div>
              <label className='text-xs uppercase tracking-widest text-[#A2E8DD] mb-2 block'>
                Notes (Optional)
              </label>
              <textarea
                placeholder='How did it feel? Any PRs today?'
                rows={3}
                value={workoutNotes}
                onChange={(e) => setWorkoutNotes(e.target.value)}
                className='bg-[#1a1a1a] text-white text-sm w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#A2E8DD] placeholder-gray-600 resize-none'
              />
            </div>

            {/* Save Button */}
            <button
              onClick={saveWorkout}
              disabled={isLoading}
              className='w-full bg-[#A2E8DD] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#5cb2a5] transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isLoading ? "Saving..." : "Save Workout"}
            </button>

          </div>
        ) : (
          <div>Past Workout will go here</div>
        )}
      </div>
    </div>
  )
}

export default WorkoutsPage