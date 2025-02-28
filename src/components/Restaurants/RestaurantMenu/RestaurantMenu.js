import { Link, useParams } from "react-router-dom"
import Header from "../../Header"
import "./RestaurantMenu.css";
import useRestaurantMenu from "../../../Hooks/useRestaurantMenu";
const RestaurantMenu = () =>{
    const {id} = useParams(); // This is Restaurant Id
    const {restaurant, loading} = useRestaurantMenu(id);
   
    //show the loading
    if(loading || !restaurant){ //Ensures Restuarant is not null
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