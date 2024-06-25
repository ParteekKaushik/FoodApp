const ShimmerCard = () =>{
    return(
        <div className="m-4 p-3 w-72 rounded-2xl bg-gray-300">
        <div className="res-img">
          <img className="rounded-xl h-60 w-72 bg-gray-200"/>
        </div>
  
        <div className="res-details">
          <h3 className="text-gray-200 text-lg bg-gray-200 rounded-md w-36 my-2">Name</h3>
          <h4 className=" text-gray-200 text-lg bg-gray-200 rounded-md w-40 my-2 ">cuisines</h4>
          <h4 className="text-gray-200 text-lg bg-gray-200 rounded-md w-64 my-2">avgRating</h4>
          <h4 className="text-gray-200 text-lg bg-gray-200 rounded-md w-28 my-2">slaString</h4>
          <h4 className="text-gray-200 text-lg bg-gray-200 rounded-md w-32 my-2">costForTwo</h4>
        </div>
      </div>
    );
};

export default ShimmerCard;