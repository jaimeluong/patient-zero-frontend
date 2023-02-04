import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Providers from './components/Providers.js';
import Patients from './components/Patients.js';
import Appointments from './components/Appointments.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="providers" element={<Providers />} />
            <Route path="patients" element={<Patients />} />
            <Route path="appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
