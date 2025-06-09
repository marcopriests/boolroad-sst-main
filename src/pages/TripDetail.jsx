import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import TripContext from '../contexts/TripContext'
import PartecipanteCard from '../components/PartecipanteCard'

const TripDetail = () => {
    const { viaggi } = useContext(TripContext)

    const { id } = useParams()

    const [trip, setTrip] = useState({})

    const [searchInput, setSearchInput] = useState("")

    const [partecipantiFiltrati, setPartecipantiFiltrati] = useState([])

    useEffect(() => {
        const foundTrip = viaggi.find((viaggio) => (viaggio.id.toString() === id))

        if (foundTrip) {
            setTrip(foundTrip)
            setPartecipantiFiltrati(foundTrip.partecipanti)
        }
    }, [])


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        if (trip.partecipanti) {
            const filtered = trip.partecipanti.filter((partecipante) => {
                const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
                return fullName.includes(searchInput.toLowerCase())
            })
            setPartecipantiFiltrati(filtered)
        }
    }, [searchInput, trip.partecipanti])


    return (
        <>
            <div className="row gy-4 my-3">
                <div className="col-12">
                    <h4 className='tripTitle'>{`Partecipanti alla gita a ${trip.nome}`}</h4>
                    <div className="form-group d-flex">
                        <input
                            type="text"
                            className="form-control border border-2 border-primary rounded-0 rounded-start"
                            placeholder="Cerca partecipante..."
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <Link to={`/`}>
                            <button
                                className="btn btn-primary rounded-0 rounded-end"
                                type="button"
                            >Torna alla lista gite
                            </button>
                        </Link >
                    </div>
                </div>
            </div>
            <hr />
            {partecipantiFiltrati && partecipantiFiltrati.map((partecipante) => {
                return (
                    <PartecipanteCard
                        key={`person-${partecipante.id}`}
                        partecipante={partecipante}
                    />
                )
            })
            }
        </>
    )
}

export default TripDetail