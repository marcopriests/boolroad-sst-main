import { useState, useContext, useEffect } from 'react'
import { useParams, NavLink, Link } from 'react-router-dom'
import TripContext from '../contexts/TripContext'
import PartecipanteCard from '../components/PartecipanteCard'

const TripDetail = () => {
    const { viaggi } = useContext(TripContext)

    const { id } = useParams()

    const [trip, setTrip] = useState({})

    const [searchInput, setSearchInput] = useState('')

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

    const partenza = new Date(trip.data_partenza)
    const rientro = new Date(trip.data_arrivo)
    const today = new Date()

    let statoViaggio, statoColor

    if (today >= partenza && today <= rientro) {
        // in corso
        statoViaggio = 'in corso'
        statoColor = 'orange'

    }

    if (today > rientro) {
        // terminato
        statoViaggio = 'terminato'
        statoColor = 'red'

    }

    if (today < partenza) {
        // futuro
        statoViaggio = 'futuro'
        statoColor = 'green'
    }

    return (
        <>
            <div className="row mt-2 px-3 gy-3">
                <div className="">
                    <Link to={`/`}><i className="fa-solid fa-arrow-left text-dark fs-4"></i></Link>
                    <h4 className="fw-bold text-center">{trip.nome}</h4>
                </div>
                <h6 className={`text-uppercase text-center text-${statoColor}`} id='stato-viaggio'>{statoViaggio}</h6>

                <div className="col-12">
                    <div className="d-flex justify-content-between mb-2">
                        <div className='text-secondary'>{trip.luogo}</div>
                        <div className={`badge rounded-pill badge-${trip.color_tag} px-2 mb-2 fw-medium`}>{trip.tipologia}</div>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                        <div className='mb-1'>Partenza: <b>{trip.data_partenza}</b></div>
                        <div className='mb-1'>Rientro: <b>{trip.data_arrivo}</b></div>
                    </div>

                    <div className='mb-4'>Accompagnatore: <b>{trip.accompagnatore}</b></div>


                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className='fw-bold my-0 py-0'>Partecipanti <span className='fw-medium'>{`(${trip.partecipanti && trip.partecipanti.length})`}</span></h5>

                        {/* Bottone 'Aggiungi Partecipante' */}
                        {statoViaggio === 'futuro' && <NavLink to={`/viaggi/${id}/aggiungi-partecipante`} className='btn btn-success btn-sm bg-main text-light shadow'>
                            <b className="">Aggiungi partecipante</b>
                        </NavLink>}
                    </div>


                    <input type="text"
                        className="form-control border-0 rounded shadow py-2 mb-4"
                        placeholder="Cerca partecipante..."
                        value={searchInput}
                        onChange={handleChange} />
                </div>

                <div id="accordion" className='mb-5'>
                    {partecipantiFiltrati && partecipantiFiltrati.map((partecipante) => {
                        return (
                            <PartecipanteCard
                                key={`person-${partecipante.id}`}
                                partecipante={partecipante}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default TripDetail