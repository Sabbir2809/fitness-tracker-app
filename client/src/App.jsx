import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layouts/Main';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import FitnessTracking from './components/fitnessTracking/FitnessTracking';
import GoalSetting from './components/goalSetting/GoalSetting';
import Community from './components/community/Community';
import Personalization from './components/personalization/Personalization';
import Auth from './components/auth/auth';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },

        {
          path: '/fitness',
          element: <FitnessTracking></FitnessTracking>,
        },
        {
          path: '/goals',
          element: <GoalSetting></GoalSetting>,
        },
        {
          path: '/community',
          element: <Community></Community>,
        },
        {
          path: '/personalization',
          element: <Personalization></Personalization>,
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path: '/signup',
          element: <Auth></Auth>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
