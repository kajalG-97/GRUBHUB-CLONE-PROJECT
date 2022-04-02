import { useSelector } from "react-redux";
export const CartPage = () => {
  const data = useSelector((store) => console.log(store.cart));
  return <div>This is cart page</div>;
};
