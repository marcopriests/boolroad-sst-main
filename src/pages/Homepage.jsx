import { useContext, useState } from "react"
import TripContext from "../contexts/TripContext"
import TripCard from "../components/TripCard"


const Homepage = () => {

  const { viaggi } = useContext(TripContext)

  const [tab, setTab] = useState(0)


  return (
    <div className="row mt-2 px-3 gy-3">
      <h3 className="fw-bold">Dashboard viaggi</h3>
      <ul className="homepage-tabs nav nav-underline d-flex justify-content-evenly">
        <li className="nav-item">
          <a className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 0 && 'active'}`} onClick={() => setTab(0)}>In corso</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 1 && 'active'}`} onClick={() => setTab(1)}>Terminati</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-dark fw-medium btn rounded-0 ${tab === 2 && 'active'}`} onClick={() => setTab(2)}>Futuri</a>
        </li>
      </ul>

      <br />


      {viaggi.map((viaggio) => {
        const partenza = new Date(viaggio.data_partenza)
        const rientro = new Date(viaggio.data_arrivo)

        const today = new Date()

        const viaggiInCorso = (today >= partenza && today <= rientro) && <TripCard key={`viaggio-in-corso_${viaggio.id}`} viaggio={viaggio} />

        const viaggiTerminati = (today > rientro) && <TripCard key={`viaggio-in-corso_${viaggio.id}`} viaggio={viaggio} />

        const viaggiFuturi = (today < partenza) && <TripCard key={`viaggio-in-corso_${viaggio.id}`} viaggio={viaggio} />

        let render

        if (tab === 0) {
          render = viaggiInCorso
        } else if (tab === 1) {
          render = viaggiTerminati
        } else if (tab === 2) {
          render = viaggiFuturi
        }

        return render
      })}
    </div>
  )
}

export default Homepage