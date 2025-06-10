import { useContext, useState } from "react"
import TripContext from "../contexts/TripContext"
import { NavLink } from "react-router-dom"

const AddPartecipante = () => {
    const { viaggi } = useContext(TripContext)

    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        cognome: '',
        codice_fiscale: '',
        telefono: '',
        email: ''
    })

    const handleChange = (e) => {
        const value = e.target.value

        setFormData((formData) => ({
            ...formData,
            id: nextId,
            [e.target.name]: value
        }))
    }

    const handleClick = (e) => {
        console.log(id)
        console.log(formData)

        partecipanti.push(formData)

        console.log(viaggi[id - 1])
        console.log(partecipanti)
    }

    //recuper l'id dall'url --- non toccare pls ---
    const id = window.location.href.split('/')[4]

    const partecipanti = viaggi[id - 1].partecipanti

    const nextId = partecipanti.length > 0 ? Math.max(...partecipanti.map(p => p.id)) + 1 : 1;





    return (
        <div className="row mt-2 px-3 gy-3">
            <h3 className="fw-bold mb-4">Aggiungi partecipante</h3>

            <form>
                <label className="form-label">
                    Nome
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il nome' required name="nome" value={formData.nome} onChange={handleChange} />

                <label className="form-label">
                    Cognome
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il cognome' required name="cognome" value={formData.cognome} onChange={handleChange} />

                <label className="form-label">
                    Codice Fiscale
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il codice fiscale' required name="codice_fiscale" value={formData.cf} onChange={handleChange} />

                <label className="form-label">
                    Numero di telefono
                </label>
                <input type="number" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il numero di telefono' required name="telefono" value={formData.telefono} onChange={handleChange} />

                <label className="form-label">
                    Email
                </label>
                <input type="email" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci la mail' required name="email" value={formData.email} onChange={handleChange} />


                <NavLink to={`/viaggi/${id}`}>
                    <button type='submit' className="btn btn-primary" onClick={() => handleClick()}>Aggiungi partecipante</button>
                </NavLink>
            </form>

        </div>
    )
}

export default AddPartecipante
