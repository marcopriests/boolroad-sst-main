const AddPartecipante = () => {
    return (
        <div className="row mt-2 px-3 gy-3">
            <h3 className="fw-bold mb-4">Aggiungi partecipante</h3>

            <form>
                <label className="form-label">
                    Nome
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il nome' required />

                <label className="form-label">
                    Cognome
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il cognome' required />

                <label className="form-label">
                    Codice Fiscale
                </label>
                <input type="text" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il codice fiscale' required />

                <label className="form-label">
                    Numero di telefono
                </label>
                <input type="number" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci il numero di telefono' required />

                <label className="form-label">
                    Email
                </label>
                <input type="email" className="form-control border-0 shadow py-2 mb-4" placeholder='Inserisci la mail' required />


                <button type='submit' className="btn btn-primary">Aggiungi partecipante</button>
            </form>

        </div>
    )
}

export default AddPartecipante
