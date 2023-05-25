import React from 'react';
import './../../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <h2>Welcome to Fitness Tracker</h2>
      <p className='home__description'>
        Track your fitness progress, set goals, connect with others, and personalize your fitness experience.
      </p>
      <div className='home__features'>
        <div className='card'>
          <i className='card__icon fas fa-dumbbell'></i>
          <h3 className='card__title'>Fitness Tracking</h3>
          <p className='card__description'>
            Track your workouts, including exercise type, duration, and calories burned.
          </p>
        </div>
        <div className='card'>
          <i className='card__icon fas fa-bullseye'></i>
          <h3 className='card__title'>Goal Setting</h3>
          <p className='card__description'>
            Set your fitness goals and track your progress towards achieving them.
          </p>
        </div>
        <div className='card'>
          <i className='card__icon fas fa-users'></i>
          <h3 className='card__title'>Community</h3>
          <p className='card__description'>
            Connect with others, share progress, and provide support in our fitness community.
          </p>
        </div>
        <div className='card'>
          <i className='card__icon fas fa-cogs'></i>
          <h3 className='card__title'>Personalization</h3>
          <p className='card__description'>
            Personalize your fitness experience by setting exercise preferences, intensity levels, and workout
            durations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
