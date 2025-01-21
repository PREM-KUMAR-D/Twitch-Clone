
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, BrowserRouter ,Routes , Route, RouterProvider} from 'react-router';

import './index.css';
import AuthPage from './AuthPage/authpage.jsx';
import DashBoardPage from './DashboardPage/dashboardpage.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {path: '/auth',element: <AuthPage/>},
  {path: '/' , element: <DashBoardPage/>}
])


createRoot(document.getElementById('root')).render(
  <App>
    <RouterProvider router={router}/>
  </App>
  ,
)
