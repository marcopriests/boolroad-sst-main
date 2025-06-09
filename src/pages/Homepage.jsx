import { useContext, useState, useEffect } from "react"
import TripContext from "../contexts/TripContext"
import TripCard from "../components/TripCard"
import { NavLink } from "react-router-dom"


const Homepage = () => {

  const { viaggi, tab, setTab } = useContext(TripContext)

  const [filteredTrips, setFilteredTrips] = useState(viaggi)
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    const filtered = viaggi.filter(trip => {
      return trip.nome.toLowerCase().includes(searchInput.toLowerCase()) || trip.luogo.toLowerCase().includes(searchInput.toLowerCase())
    })

    setFilteredTrips(filtered)

  }, [searchInput])


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

      {/* Bottone 'Aggiungi Viaggio' */}
      <NavLink to={'/viaggi/crea-viaggio'} id="add-button" className={`shadow`}>
        <i className="fa-solid fa-plus text-light fs-4"></i>
      </NavLink>

      {/* searchbar */}
      <input type="text" className="form-control border-0 rounded-4 shadow py-3 mb-4" placeholder="Cerca viaggio..." value={searchInput} onChange={handleChange} />

      {filteredTrips.map((viaggio) => {
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