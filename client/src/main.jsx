
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, BrowserRouter ,Routes , Route, RouterProvider} from 'react-router';
import { Navigate } from 'react-router';

import './index.css';
import AuthPage from './AuthPage/authpage.jsx';
import DashBoardPage from './DashboardPage/dashboardpage.jsx';
import App from './App.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route  path='/auth' element={<AuthPage/>} />
        <Route  path='/' element={<DashBoardPage/>} />


      </Routes>
    </App>
  </BrowserRouter>
  ,
)
