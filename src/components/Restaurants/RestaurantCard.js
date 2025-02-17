import './RestaurantCard.css';
const RestaurantCard = ({resName, cuisine, rating, eta, image}) =>{
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={resName}/>
            </div>
            <div className="card-info">
                <h2>{resName}</h2>
                <p>{cuisine}</p>
                <p>⭐ {rating} | ⏱ {eta}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;