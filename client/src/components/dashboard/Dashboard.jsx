import React from 'react';
import './../../styles/Dashboard.css';
import FitnessTracker from './FitnessTracker';
import FitnessGoals from './FitnessGoals';
import WorkoutHistory from './WorkoutHistory';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <div className='dashboard-grid'>
        <div className='card'>
          <FitnessTracker />
        </div>
        <div className='card'>
          <FitnessGoals />
        </div>
        <div className='card'>
          <WorkoutHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
