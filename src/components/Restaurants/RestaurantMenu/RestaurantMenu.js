import { Link, useParams } from "react-router-dom"
import Header from "../../Header"
import { useState } from "react";
import "./RestaurantMenu.css";
const RestaurantMenu = () =>{
    const {id} = useParams(); // This is Restaurant Id
    const [restaurant, setRestaurant] = useState(null);

    //Fetch the data
    useState(()=>{
        fetch(`http://localhost:3001/restaurants/${id}`)
        .then((response) =>response.json())
        .then((data) => setRestaurant(data))
        .catch((error)=> console.error("Error Fetching Menu:", error));
    }, [id]);

    //show the loading
    if(!restaurant){
        return <div className="loading">Loading Menus...</div>
    }
    return (
        <div className="menu-container">
            {/* Header */}
            <Header/>
            {/* Back Button Link */}
            <Link to="/" className="back-button-top">⬅ Back to Home</Link>

            <div className="menu-page">
                <div className="restaurant-header">
                    <h1>{restaurant.resName}</h1>
                    <p>🕒 {restaurant.eta} | ⭐ {restaurant.rating}</p>
                </div>
                <div className="menu-list">
                    {restaurant.menu.map((item)=>(
                    <div className="menu-item">
                        <div className="menu-info">
                            <h2>{item.name}</h2>
                            <p>₹{item.price}</p>
                            <p>⭐{item.rating}</p>
                            <p className="menu-desc">{item.description}</p>
                        </div>
                    
                    <div className="menu-image">
                        <img src={item.image} alt={item.name}/>
                        <button className="add-button">ADD</button>
                    </div>
                </div>
                ))}
            </div>            
        </div>
        {/* Back Button Link */}
        <Link to="/" className="back-button-bottom">⬅ Back to Home</Link>
    </div>
    )
}

export default RestaurantMenu;