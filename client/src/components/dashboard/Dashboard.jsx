import React, { useState, useEffect } from 'react';
import './../../styles/Dashboard.css';

const Dashboard = () => {
  const [fitnessProgress, setFitnessProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const savedFitnessProgress = localStorage.getItem('fitnessProgress');
    if (savedFitnessProgress) {
      setFitnessProgress(parseFloat(savedFitnessProgress));
    }

    const savedOverallProgress = localStorage.getItem('overallProgress');
    if (savedOverallProgress) {
      setOverallProgress(parseFloat(savedOverallProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fitnessProgress', fitnessProgress.toString());
    localStorage.setItem('overallProgress', overallProgress.toString());
  }, [fitnessProgress, overallProgress]);

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <div className='card'>
        <h3>Fitness Progress</h3>
        <p>{fitnessProgress.toFixed(2)}%</p>
      </div>
      <div className='card'>
        <h3>Overall Progress</h3>
        <p>{overallProgress.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Dashboard;
