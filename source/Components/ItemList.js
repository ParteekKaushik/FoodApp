import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";


const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleClick = (item) =>{
     dispatch(addItem(item));
  }

  return (
    <div>
      <ul>
        {items.map((items) => (
          <div key={items.card.info.id}>
            <hr />
            <li>
              <div className="flex p-8">
                <div className=" w-5/6">
                  <div className="font-bold text-gray-600 text-2xl">
                    {items.card.info.name}
                  </div>

                  <div className="pb-2 font-semibold text-gray-600">
                    ₹
                    {items.card.info.price / 100 ||
                      items.card.info.defaultPrice / 100}
                  </div>

                  <div className="pb-2">
                    ⭐{" "}
                    <span className="text-green-800 font-bold">
                      {items.card.info.ratings.aggregatedRating.rating}
                    </span>{" "}
                    <span className="text-gray-600 font-semibold">
                      ({items.card.info.ratings.aggregatedRating.ratingCountV2})
                    </span>
                  </div>

                  <div className="text-gray-600 font-medium">
                    {items.card.info.description}
                  </div>
                </div>

                <div>
                  <span className="bg-slate-200 absolute ml-12 w-32 h-9 flex justify-center items-center rounded-xl text-green-500 shadow-xl font-extrabold ">
                    <button onClick={() => handleClick(items)}>ADD</button>
                  </span>
                  <img
                    className="m-4 p-3 rounded-2xl bg-gray-200 w-48 h-40"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      items.card.info.imageId
                    }
                  />
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

/*
<div>
              <hr />
              <li key={item.card.info.id}>
                <div className="flex p-8">
                  <div className=" w-4/6">
                    <div className="font-bold text-gray-600 text-2xl">
                      {item.card.info.name}
                    </div>
*/
