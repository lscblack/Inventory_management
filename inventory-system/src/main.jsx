import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/Dashboard1/App.jsx';
import Login from '../src/Dashboard1/Pages/Login.jsx';
import Loginn from '../src/Dashboard2/Pages/Loginn.jsx';
import Register from '../src/Dashboard1/Pages/Register.jsx';
import User from '../src/Dashboard1/Pages/User.jsx';
import Notfound from '../src/Dashboard1/Pages/Notfound.jsx';
import Request from '../src/Dashboard2/Pages/Request.jsx';
import Reportt from '../src/Dashboard2/Pages/Reportt.jsx';
import Account  from '../src/Dashboard2/Pages/Account.jsx';
import Upload from '../src/Dashboard2/Pages/Upload.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Finance from '../src/Dashboard1/Pages/Finance.jsx';
import Dashboard from '../src/Dashboard1/Pages/Dashboard.jsx';
import Operations from '../src/Dashboard1/Pages/Operations.jsx';
import Report from '../src/Dashboard1/Pages/Report.jsx';
import Weekly from '../src/Dashboard1/Pages/Weekly.jsx';
import Montly from '../src/Dashboard1/Pages/Montly.jsx';
import Annualy from '../src/Dashboard1/Pages/Annualy.jsx';
import Dashboard1 from '../src/Dashboard1/Pages/Dashboard.jsx';
import Dashboard2 from './Dashboard2/Pages/Dashboardd.jsx';
import Dashboard3 from './Dashboard3/Pages/Dashboarddd.jsx';
import Dashboardd from './Dashboard2/Pages/Dashboardd.jsx';
import Dashboarddd from './Dashboard3/Pages/Dashboarddd.jsx';
import Registerr from './Dashboard1/Pages/Registerr.jsx';
import ItemsIn from '../src/Dashboard3/Pages/ItemsIn.jsx'
import Itemout from '../src/Dashboard3/Pages/Itemout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Loginn" element={<Loginn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Admin/Home" element={<Dashboard />} />
        <Route path="/Finance/Home" element={<Dashboardd/>} />
        <Route path="/Operations/Home" element={<Dashboarddd/>} />
        <Route path="/User" element={<User />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/Operations" element={<Operations />} />
        <Route path="/Weekly" element={<Weekly />} />
        <Route path="/Monthly" element={<Montly />} />
        <Route path="/Annualy" element={<Annualy />} />
        <Route path="/Daily" element={<Report />} />
        <Route path="/Request" element={<Request/>}/>
          <Route path="/Reportt" element={<Reportt/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/Itemin" element={<ItemsIn/>}/>
          <Route path="/Itemout" element={<Itemout/>}/>
          <Route path="/Registerr" element={<Registerr/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
