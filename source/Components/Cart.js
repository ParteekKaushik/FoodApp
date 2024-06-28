import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  // console.log(cardItems);

  return (
    <div>
      <h1 className="text-center text-2xl m-5 p-5 font-extrabold text-slate-600">
        Cart
      </h1>
      <div className="w-6/12 m-auto">
        {cardItems.length === 0 ? (
          <h1 className=" text-3xl text-slate-600 font-bold">Your Cart is empty, Please add some items to Buy</h1>
        ) : (
          <ItemList items={cardItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
