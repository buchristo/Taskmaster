import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/index.css'
import Header from './components/Header.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProjectCreator from './pages/ProjectCreator.jsx'
import ProjectManager from './pages/ProjectManager.jsx'
import TodoCreator from './pages/TodoCreator.jsx'
import TodoUpdater from './pages/TodoUpdater.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <WelcomePage />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/dashboard/:name",
        element: <Dashboard />
      },
      {
        path: "/project/create",
        element: <ProjectCreator />
      },
      {
        path: "/projectmanager/:id",
        element: <ProjectManager />
      },
      {
        path: "/todo/create/:projectId",
        element: <TodoCreator />
      },
      {
        path: "/todo/update/:todoId/:projectId",
        element: <TodoUpdater />
      }
    ],
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
