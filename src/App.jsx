import viaggi from "./data/array";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import TripDetail from "./pages/TripDetail";
import TripContext from "./contexts/TripContext";


const App = () => {



  return (
    <>
      <TripContext.Provider value={{ viaggi }}>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaultLayout />}>

              <Route index element={<Homepage />} />
              <Route path="/viaggi/:id" element={<TripDetail />} />

            </Route>

          </Routes>

        </BrowserRouter>

      </TripContext.Provider>
    </>
  )
}

export default App
