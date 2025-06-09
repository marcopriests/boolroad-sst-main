const PartecipanteCard = ({ partecipante }) => {
    const { nome, cognome, codice_fiscale, telefono, email, id } = partecipante;

    return (
        <div className="accordion mb-3 border-0 shadow rounded">
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id={`heading-${id}`}>
                    <button
                        className="accordion-button collapsed bg-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${id}`}
                    >
                        {nome} {cognome}
                    </button>
                </h2>
                <div
                    id={`collapse-${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${id}`}
                    data-bs-parent="#accordion"
                >
                    <div className="info accordion-body rounded-bottom pb-1">
                        <ul className="ps-0">
                            <li>
                                Codice Fiscale:
                                <b> {codice_fiscale}</b>
                            </li>
                            <li>
                                Telefono:
                                <b> {telefono}</b>
                            </li>
                            <li>
                                Email:
                                <b> {email}</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartecipanteCard