import React, { useState, useEffect } from 'react';
import './../../styles/FitnessTracking.css';

const FitnessTracking = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState(0);
  const [calories, setCalories] = useState('');
  const [trackedWorkouts, setTrackedWorkouts] = useState([]);

  useEffect(() => {
    const savedWorkouts = localStorage.getItem('trackedWorkouts');
    if (savedWorkouts) {
      setTrackedWorkouts(JSON.parse(savedWorkouts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trackedWorkouts', JSON.stringify(trackedWorkouts));
  }, [trackedWorkouts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = {
      exercise,
      duration,
      calories,
    };

    setTrackedWorkouts([...trackedWorkouts, newWorkout]);
    setExercise('');
    setDuration(0);
    setCalories('');
  };

  return (
    <div className='fitness-tracking'>
      <h2>Fitness Tracking</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='exercise'>Exercise Type:</label>
          <input
            type='text'
            id='exercise'
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='duration'>Duration (seconds):</label>
          <input
            type='number'
            id='duration'
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='calories'>Calories Burned:</label>
          <input
            type='number'
            id='calories'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Track Workout</button>
      </form>

      <div className='workouts'>
        <h3>Tracked Workouts:</h3>
        {trackedWorkouts.length === 0 ? (
          <p>No workouts tracked yet.</p>
        ) : (
          <div className='workout-cards'>
            {trackedWorkouts.map((workout, index) => (
              <div className='workout-card' key={index}>
                <div className='workout-card__header'>
                  <i className='fas fa-dumbbell'></i>
                  <span>{workout.exercise}</span>
                </div>
                <div className='workout-card__content'>
                  <div className='workout-card__item'>
                    <span>Duration:</span>
                    <span>{workout.duration} seconds</span>
                  </div>
                  <div className='workout-card__item'>
                    <span>Calories:</span>
                    <span>{workout.calories}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessTracking;
