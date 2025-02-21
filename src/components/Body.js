import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurants/RestaurantCard";
import ShimmerCard from "./Shimmer/ShimmerCard";

const Body = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [showTopRated, setShowTopRated] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    //Fetching the data and storing in state
    const fetchData = async()=>{
        try{
            const response = await fetch('http://localhost:3001/restaurants');
            const data = await response.json();
            console.log(data);
            setRestaurants(data);
            setLoading(false);
        }catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        console.log('Body component mounted');
        fetchData();
    },[]);
    
    //Filter restaurants 
    const filteredRestaurants = restaurants.filter((restaurant)=>
        restaurant.resName.toLowerCase().includes(searchQuery.toLowerCase()));

    const displayRestaurants = showTopRated 
        ? filteredRestaurants.filter((restaurant)=> parseFloat(restaurant.rating)>=4.5)
        : filteredRestaurants;

    const handleShowTopRated = () =>{
        setShowTopRated(true);
    };

    const handleResetFilters = () =>{
        setShowTopRated(false);
        setSearchQuery('');
    };
    

    return (
           <div className="body">
            {/* Search Input */}
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search for Restaurants..."
                    value={searchQuery}
                    onChange={(e)=>{
                        setSearchQuery(e.target.value)
                        setShowTopRated(false); //Reset top-rated 
                    }}
                />
                <button onClick={handleShowTopRated}> Show Top Rated</button>
                <button onClick={handleResetFilters}> Reset</button>
            </div>
   {/* Show shimmer placeholders while loading */}
   {loading ? (
        <div className="rest-cards">
          {Array.from({ length: 10 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className="rest-cards">
          {displayRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              resName={restaurant.resName}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              eta={restaurant.eta}
              image={restaurant.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;