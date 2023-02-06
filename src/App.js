import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Providers from './components/Providers.js';
import Patients from './components/Patients.js';
import Appointments from './components/Appointments.js';
import ProvidersForm from './components/ProvidersForm.js';
import PatientsForm from './components/PatientsForm.js';
import AppointmentsForm from './components/AppointmentsForm.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="providers" element={<Providers />} />
            <Route path="patients" element={<Patients />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="providers/new" element={<ProvidersForm />} />
            <Route path="patients/new" element={<PatientsForm />} />
            <Route path="appointments/new" element={<AppointmentsForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
