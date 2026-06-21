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

    updated[eIdx].sets = updated[eIdx].sets.filter((_, index) => index !== sIdx).map((set, index) => ({ ...set, setNumber: index + 1 }));

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
    <div className='relative min-h-screen w-full bg-[#111] font-mono text-white'>
      {/* Header */}
      <div className="border-b-2 border-[#A2E8DD] px-4 py-6 ">
        <h1 className='text-[#A2E8DD] text-3xl font-bold uppercase'>Workout Log</h1>
        <p className='text-gray-400 text-sm'>Track your grind. No excuses.</p>
      </div>
      {/* Buttons */}

      <div className='flex '>
        <button className={`border-2 border-[#A2E8DD] px-6 py-4 ${activeTab === 'log' ? 'bg-[#A2E8DD] text-black' : 'bg-[#111]'}`} onClick={() => {
          setActiveTab('log')
        }}>Log Workout</button>
        <button className={`border-2 border-[#A2E8DD] px-6 py-4 ${activeTab === 'past' ? 'bg-[#A2E8DD] text-black' : 'bg-[#111]'}`} onClick={() => {
          setActiveTab('past')
        }}>Past Workout</button>
      </div>
      {/* Content */}
      <div>
        {activeTab == 'log' ? (
          <div className='space-y-6'>
            <div>
              <label className='text-xs uppercase tracking-widest text-[#A2E8DD] mb-2 block'>Date:</label>
              <input type="date"
                className='bg-black border-2 border-[#A2E8DD]/40 text-white px-4 py-3 rounded-full w-full focus:outline-none focus:border-[#A2E8DD]'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {
              exercises.map((ex, eIdx) => (
                <div key={eIdx} className="border-2 border-[#A2E8DD]/40 rounded-lg p-4 space-y-3">
                  <div className='flex gap-2 items-center'>
                    <span className='text-[#A2E8DD] font-bold text-lg'>
                      {eIdx + 1}
                    </span>
                    <input type="text"
                      placeholder='EXERCISE NAME'
                      value={ex.name}
                      className='border-2 border-[#A2E8DD]/40 focus:outline-none focus:border-[#A2E8DD] w-full rounded-full px-4 py-1'
                      onChange={(e) => updateName(eIdx, e.target.value)}
                    />
                    <button
                      onClick={() => removeExercise(eIdx)}
                      className='text-red-500 hover:text-red-400 text-xs uppercase tracking-widest border border-red-500/40 hover:border-red-400 px-3 py-2 rounded transition-all'
                    >
                      Remove
                    </button>
                  </div>
                  {
                    ex.sets.map((set, sIdx) => (
                      <div key={sIdx}>
                        <div className='flex gap-2 items-center'>
                          <span className="text-[#A2E8DD] font-bold">{set.setNumber}</span>
                          <input
                            type="number"
                            placeholder="Reps"
                            value={set.reps || ''}
                            onChange={(e) => updateSet(eIdx, sIdx, "reps", +e.target.value)}
                            className='border-2 border-[#A2E8DD]/40 focus:outline-none focus:border-[#A2E8DD] w-1/2 rounded-full px-4 py-1'
                          />
                          <input
                            type="number"
                            placeholder="kg"
                            value={set.weight || ''}
                            onChange={(e) => updateSet(eIdx, sIdx, "weight", +e.target.value)}
                            className='border-2 border-[#A2E8DD]/40 focus:outline-none focus:border-[#A2E8DD] w-1/2 rounded-full px-4 py-1'
                          />
                          <button
                            onClick={() => removeSet(eIdx, sIdx)}
                            className='text-red-500 hover:text-red-400 text-xs uppercase tracking-widest border border-red-500/40 hover:border-red-400 px-3 py-2 rounded transition-all'
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>

              ))
            }

          </div>
        ) : (
          <div>Past Workout will go here</div>
        )}
      </div>
    </div>
  )
}

export default WorkoutsPage