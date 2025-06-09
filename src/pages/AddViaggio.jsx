import React from 'react'

const AddViaggio = () => {
    return (
        <div className="row mt-2 px-3 gy-3">
            <h3 className="fw-bold mb-4">Aggiungi viaggio</h3>

            <form>
                <label className="form-label">
                    Titolo del viaggio
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il titolo del viaggio' required />

                <label className="form-label">
                    Luogo
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il luogo del viaggio' required />

                <label className="form-label">
                    Tipologia
                </label>
                <select className="form-select border-0 shadow py-2 mb-4" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <label className="form-label">
                    Data di partenza
                </label>
                <input type="date" className="form-control border-0 shadow py-2 mb-4" required />

                <label className="form-label">
                    Data di rientro
                </label>
                <input type="date" className="form-control border-0 shadow py-2 mb-4" required />

                <label className="form-label">
                    Accompagnatore
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder="Inserisci il nome dell'accompagnatore" required />

                <button type='submit' className="btn btn-primary">Aggiungi viaggio</button>
            </form>
        </div>
    )
}

export default AddViaggio
