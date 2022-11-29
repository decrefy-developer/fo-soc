import { useQuery } from "react-query";
import * as OrderServices from "../../api/services/orderServices";

export const Order = () => {
  const { data: orders, isLoading } = useQuery(
    "orders",
    OrderServices.getAllOrders
  );

  if (isLoading) {
    console.log("loading....");
  }

  if (!isLoading) {
    console.log(orders);
  }

  return <div>Order Page</div>;
};
