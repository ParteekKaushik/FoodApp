import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <div className="res-item">
          {resList.map((restaurant) => (
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
