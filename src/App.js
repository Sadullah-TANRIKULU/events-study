import './App.css';
import Events from './components/Events';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"


function App() {
  return (

    <div>

        {/* <Events /> */}
        <Routes>

          <Route path="events" element={<Events />} />

        </Routes>
      <Outlet />
    </div>);

}

export default App;
