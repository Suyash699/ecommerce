import Navbar from "../features/navbar/Navbar";
import { UserProfile } from "../features/user/components/UserProfile";

const UserProfilePage = () => {
  return (
    <div>
      <Navbar>
        <h2 className="text-2xl font-semibold">My Profile</h2>
        <UserProfile />
      </Navbar>
    </div>
  );
};

export default UserProfilePage;
