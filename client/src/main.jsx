
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, BrowserRouter ,Routes , Route} from 'react-router';

import App from './App.jsx'
import AuthPage from './AuthPage/authpage.jsx';
import DashBoardPage from './DashboardPage/dashboardpage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/dashboard' element={<DashBoardPage/>} />
      <Route path='*' element={App} />
    </Routes>
  </BrowserRouter>


  ,
)
