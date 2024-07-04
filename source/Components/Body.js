import ResturantCard, {withPromotedLable } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
// import useResturantList from "../Utils/useResturantList";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [resFilteredList, setResFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLable(ResturantCard);

  // console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    
    const json = await data.json();

    // console.log(data);

    const ResArray =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(ResArray);
    setResFilteredList(ResArray);
  };


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you are offline!!!</h1> <br />
        <h1>Please check your Internet connection</h1>
      </div>
    );
  }

  // setResFilteredList(listOfRestaurant);
  if(!listOfRestaurant) return null;


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between h-20 items-center">
        <div className="searchBar flex w-3/6 justify-center">
          <input
            type="text"
            className="border-2 border-black w-2/5 rounded-lg font-bold mr-4 h-8 shadow-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn border-2 border-solid w-1/6 rounded-xl font-bold bg-green-500 h-8 shadow-md text-white"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => {
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              });
              setResFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className=" bg-green-500 w-1/4 rounded-xl font-bold mr-16 h-8 shadow-md text-white"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setResFilteredList(filteredList);
          }}
        >
          Filter Top Rated Restaurants
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div className="res-container w-10/12">
          <div className="res-item grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-fit">
            {resFilteredList.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.isOpen ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <ResturantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
