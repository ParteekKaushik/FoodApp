import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="body">
      <div className="flex justify-between h-20 items-center">
        <div className="searchBar flex w-3/6 justify-center">
          <input
            type="text"
            className="border-2 border-black w-2/5 rounded-lg font-bold mr-4 h-8 shadow-sm"
          />
          <button className="searchBtn border-2 border-solid w-1/6 rounded-xl font-bold bg-green-300 h-8 shadow-md">
            Search
          </button>
        </div>

        <button className=" bg-green-300 w-1/4 rounded-xl font-bold mr-16 h-8 shadow-md">
          Filter Top Rated Restaurants
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div className="shimmer-container res-container w-10/12">
          <div className="shimmer-item res-item grid grid-cols-4">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
