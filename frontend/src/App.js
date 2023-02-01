import { Route, Routes } from 'react-router-dom';
import CardsRender from './components/CardsRender';
import Navbar from './components/Navbar';
import AboutUs from './Pages/AboutUs';
import EventPage from './Pages/EventPage'
import OurPatients from './Pages/OurPatients';
import OurScience from './Pages/OurScience';
import PatientDetails from './Pages/PatientDetails';
function App() {
  return (
    <div className="m-0 p-0">
      {/* <CardsRender></CardsRender> */}
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<CardsRender />} />
        <Route path="/OurPatients" element={<CardsRender />} />
        <Route path='/OurPatients/patientDetails/:id' element={<PatientDetails />} />
        <Route path="/OurScience/:id" element={<OurScience />} />
        <Route path="/OurScience" element={<OurScience />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<EventPage />} />
      </Routes>

    </div>
  );
}

export default App;
