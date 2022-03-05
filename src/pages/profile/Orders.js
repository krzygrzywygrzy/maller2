import { collection } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import OrderCard from "../../components/orderCard/OrderCard";

const Orders = () => {
  const { data, error, loading } = useFirebaseFetch(
    collection(db, `users/${auth.currentUser.uid}/orders`)
  );

  if (loading) return <div>Loading your orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return data ? (
    <div>
      {data.length > 0 ? (
        <div className="orders-display">
          {data.map((order) => (
            <OrderCard order={order} key={order.id} />
          ))}
        </div>
      ) : (
        <div className="orders-display">You have no orders yet!</div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Orders;
