import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utils/useResturantMenu";
import ResturantMenuCategory from "./ResturantMenuCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    avgRating,
    areaName,
    locality,
    sla,
    feeDetails,
  } = resInfo?.cards[2]?.card?.card?.info;

  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // const nestedItemCategory =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ==
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //   );

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  return (
    <div className="resturant-menu flex justify-center items-end">
      <div className="w-4/6">
        <h1 className="mt-8 font-bold mb-3 text-3xl pb-2">{name}</h1>
        <div className="border-2 border-gray-300 w-11/12 rounded-2xl p-4 shadow-2xl">
          <h2 className="font-bold pb-1">
            ⭐{avgRating}({totalRatingsString}) ▪️ {costForTwoMessage}
          </h2>
          <h2 className=" text-red-600 font-bold pb-1">
            {cuisines.join(", ")}
          </h2>
          <h2>
            <span className="font-bold pb-1">Outlet :</span> {areaName}-{" "}
            {locality}
          </h2>
          <h2 className="font-bold pb-1">{sla.slaString.toLowerCase()}</h2>
          <hr />
          <div>
            <h2 className=" text-gray-400 p-1">{feeDetails.message}</h2>
          </div>
        </div>
        <div className="flex justify-center items-center  w-4/6 m-8">
          <h2 className="font-bold text-gray-500 text-5xl my-6"> 🥘 Menu 🥘</h2>
        </div>

        {/* {nestedItemCategory.map((category) => (
          <ResturantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            subCategory={category?.card?.card?.categories}
          />
        ))}  */}
        {itemCategory.map((category, index) => (
          <ResturantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card.itemCards}
            title={category?.card?.card}
            showItems = {index === showIndex ? true :false}
            setShowIndex = {() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
