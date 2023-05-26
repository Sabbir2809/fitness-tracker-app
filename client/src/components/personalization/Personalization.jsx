import React, { useState, useEffect } from 'react';
import './../../styles/Personalization.css';

const Personalization = () => {
  const [exercisePreferences, setExercisePreferences] = useState([]);
  const [intensityLevel, setIntensityLevel] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');

  useEffect(() => {
    // Fetch exercise preferences from API or localStorage
    // and update the state
    // Example code for fetching from localStorage:
    const savedPreferences = localStorage.getItem('exercisePreferences');
    if (savedPreferences) {
      setExercisePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  useEffect(() => {
    // Save exercise preferences to API or localStorage
    // whenever the state changes
    // Example code for saving to localStorage:
    localStorage.setItem('exercisePreferences', JSON.stringify(exercisePreferences));
  }, [exercisePreferences]);

  const handleExercisePreferenceChange = (e) => {
    const preference = e.target.value;
    setExercisePreferences((prevPreferences) => {
      if (prevPreferences.includes(preference)) {
        return prevPreferences.filter((pref) => pref !== preference);
      } else {
        return [...prevPreferences, preference];
      }
    });
  };

  const handleIntensityLevelChange = (e) => {
    setIntensityLevel(e.target.value);
  };

  const handleWorkoutDurationChange = (e) => {
    setWorkoutDuration(e.target.value);
  };

  return (
    <div className='personalization'>
      <h2>Personalization</h2>
      <form>
        <div className='form-group'>
          <label>Exercise Preferences:</label>
          <div>
            <label>
              <input
                type='checkbox'
                value='Cardio'
                checked={exercisePreferences.includes('Cardio')}
                onChange={handleExercisePreferenceChange}
              />
              Cardio
            </label>
            <label>
              <input
                type='checkbox'
                value='Strength Training'
                checked={exercisePreferences.includes('Strength Training')}
                onChange={handleExercisePreferenceChange}
              />
              Strength Training
            </label>
            <label>
              <input
                type='checkbox'
                value='Yoga'
                checked={exercisePreferences.includes('Yoga')}
                onChange={handleExercisePreferenceChange}
              />
              Yoga
            </label>
          </div>
        </div>
        <div className='form-group'>
          <label>Intensity Level:</label>
          <select value={intensityLevel} onChange={handleIntensityLevelChange}>
            <option value=''>Select</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Workout Duration:</label>
          <input
            type='text'
            value={workoutDuration}
            onChange={handleWorkoutDurationChange}
            placeholder='Enter duration in minutes'
          />
        </div>
      </form>
    </div>
  );
};

export default Personalization;
