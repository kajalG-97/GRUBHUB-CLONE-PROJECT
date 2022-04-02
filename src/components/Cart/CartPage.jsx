import { useSelector } from "react-redux";
export const CartPage = () => {
  const data = useSelector((store) => console.log(store.cart));
  return <div>Cart Page</div>;
};
