import { useState, useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import UserContext from "../Utils/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = resData?.info;
  return (
    <div className="m-4 p-3 w-72 rounded-2xl bg-gray-200 hover:shadow-2xl hover:bg-gray-300">
      <div className="res-img">
        <img className="rounded-xl h-60 w-72" src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="res-details">
        <h3 className="font-bold pt-2 text-gray-600 text-lg">{name.length>20 ? name.slice(0,20) + "..." : name}</h3>
        <h4 className="font-bold text-gray-600 text-base">⭐{avgRating} ▪️ {sla.slaString}</h4>
        <h4 className="text-gray-600">{cuisines.join(", ").length>22 ? cuisines.join(", ").slice(0,22) + "..." : cuisines.join(", ")}</h4>
        <h4 className="text-gray-600">{areaName}</h4>
        <h4 className="text-gray-600">{costForTwo}</h4>
        {/* <h4 className="text-gray-600"> User : {loggedInUser}</h4> */}
      </div>
    </div>
  );
};

export const withPromotedLable = (ResturantCard) =>{
  return(props) =>{
    return(
      <div>
        <label className="absolute bg-black text-white ml-4 m-2 p-2 rounded-xl">SERVICEABLE</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
