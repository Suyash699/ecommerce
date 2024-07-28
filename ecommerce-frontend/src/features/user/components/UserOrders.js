import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export function UserOrders() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectUserOrders);

 useEffect(()=>{
    dispatch(fetchLoggedInUserOrdersAsync(user && user.id))
  },[])


  return (
    <div>
      {orders && orders.map((order)=>(<h1 className="p-24 text-2xl" key={user.id}>
        {order.id}
      </h1>))}
    </div>
  );
}
