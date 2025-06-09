import { Link } from 'react-router-dom'

const TripCard = ({ viaggio }) => {
  const { id, nome, luogo, tipologia, color_tag, data_partenza, data_arrivo, accompagnatore, partecipanti } = viaggio;

  return (
    <Link className="link-trip" to={`/viaggi/${id}`}>
      <div className="col-12 mb-3">
        <div className="card border-0 shadow">
          <div className="card-body p-4">
            <h4 className="card-title">{nome}</h4>
            <div className="text-secondary mb-2">{luogo}</div>
            <div className={`badge rounded-pill badge-${color_tag} px-2 mb-2 fw-medium`}>{tipologia}</div>
            <div className='mb-1'>Partenza: <b>{data_partenza}</b></div>
            <div className='mb-1'>Rientro: <b>{data_arrivo}</b></div>
            <div className='mb-1'>Partecipanti: <b>{partecipanti.length}</b></div>

          </div>
          <div className="card-footer py-3 bg-primary border-0">
            <div className='text-center text-light'>Accompagnatore:</div>
            <div className='text-center text-light fw-bold'>{accompagnatore}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TripCard