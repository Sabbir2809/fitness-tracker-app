import React, { useState, useEffect } from 'react';
import './../../styles/GoalSetting.css';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState(0);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      goal,
      progress: 0,
    };

    setGoals([...goals, newGoal]);
    setGoal('');
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleIncrementProgress = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].progress += 10;
    setGoals(updatedGoals);
  };

  const handleDecrementProgress = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].progress -= 10;
    setGoals(updatedGoals);
  };

  return (
    <div className='goal-setting'>
      <h2>Goal Setting</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='goal'>Goal:</label>
          <input type='text' id='goal' value={goal} onChange={(e) => setGoal(e.target.value)} required />
        </div>
        <button type='submit'>Set Goal</button>
      </form>

      <div className='goals'>
        <h3>Goals:</h3>
        {goals.length === 0 ? (
          <p>No goals set yet.</p>
        ) : (
          <ul className='goal-list'>
            {goals.map((goal, index) => (
              <li key={index} className='goal-item'>
                <div className='goal-info'>
                  <span>{goal.goal}</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className='goal-progress'>
                  <div className='progress-bar' style={{ width: `${goal.progress}%` }}></div>
                </div>
                <div className='goal-actions'>
                  <button onClick={() => handleIncrementProgress(index)} disabled={goal.progress === 100}>
                    +
                  </button>
                  <button onClick={() => handleDecrementProgress(index)} disabled={goal.progress === 0}>
                    -
                  </button>
                  <button onClick={() => handleDeleteGoal(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GoalSetting;
