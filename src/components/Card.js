import './Card.css'

export default function Card(props) {
    return (
        <div>
            <div className="card-container">
                <div className="img-container">
                    <img src={`${props.imageUrl}`} alt="Img of a location" className="card-img" />
                </div>
                <div className="info-container">
                    <div className="header-info-container">
                        <img src="./images/location.png" alt="Location Pin Icon"  className="location" />
                        <h3>{`${props.location}`}</h3>
                        <a href={props.googleMapsUrl} target="_" className="maps-link">View On Google Maps</a>
                    </div>
                    <p><span>{`${props.startDate} - ${props.endDate}`}</span></p>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}