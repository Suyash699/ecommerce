import Navbar from "../features/navbar/Navbar";
import {UserOrders} from "../features/user/components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
      <h2 className="text-2xl font-semibold">My Orders</h2>
        <UserOrders />
      </Navbar>
    </div>
  );
};

export default UserOrdersPage;
