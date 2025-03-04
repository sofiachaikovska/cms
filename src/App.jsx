import './App.css';

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavSidebar from './components/NavSidebar/NavSidebar';
import Loader from './components/Loader/Loader';

const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const StudentsPage = lazy(() => import('./pages/StudentsPage/StudentsPage'));
const TasksPage = lazy(() => import('./pages/TasksPage/TasksPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="innerAppContainer">
        <NavSidebar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<StudentsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
