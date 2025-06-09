const PartecipanteCard = ({ partecipante }) => {
    const { nome, cognome, codice_fiscale, telefono, email, id } = partecipante;

    return (
        <div className="accordion mb-2">
            <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${id}`}>
                    <button
                        className="accordion-button collapsed bg-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${id}`}
                    >
                        {nome} {cognome}
                    </button>
                </h2>
                <div
                    id={`collapse-${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${id}`}
                >
                    <div className="info accordion-body">
                        <ul className="ps-0">
                            <li>Codice Fiscale: {codice_fiscale}</li>
                            <li>Telefono: {telefono}</li>
                            <li>Email: {email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartecipanteCard