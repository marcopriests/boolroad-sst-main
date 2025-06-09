import viaggi from "./data/array";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TripDetail from "./pages/TripDetail";
import TripContext from "./contexts/TripContext";
import AddViaggio from "./pages/AddViaggio";
import AddPartecipante from "./pages/AddPartecipante";


const App = () => {

  const [tab, setTab] = useState(0);

  return (
    <>
      <TripContext.Provider value={{ viaggi, tab, setTab }}>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaultLayout />}>

              <Route index element={<Homepage />} />
              <Route path="/viaggi/crea-viaggio" element={<AddViaggio />} />
              <Route path="/viaggi/:id" element={<TripDetail />} />
              <Route path="/viaggi/:id/aggiungi-partecipante" element={<AddPartecipante />} />

            </Route>

          </Routes>

        </BrowserRouter>

      </TripContext.Provider>
    </>
  )
}

export default App
