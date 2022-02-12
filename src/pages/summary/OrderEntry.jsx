import Options from "../entry/Options";
import OrderSummary from "./OrderSummary";

const OrderEntry = () => {
  return <div>
    <h2>Your Order</h2>
    <h3>Scoops</h3>
    <Options optionType={"scoops"} />
    <h3>Toppings</h3>
    <Options optionType={"toppings"} />
    <hr />
    <OrderSummary />
  </div>;
}

export default OrderEntry;
