import { CDN_URL } from "../Utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="res-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4> {avgRating} Star rating</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>₹ {costForTwo / 100} FOR TWO</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
