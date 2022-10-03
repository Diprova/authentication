import "./index.css";
import Submission from "./submission";
import RegisterDropDown from "../register";
import Report from "./report";

const Profile = () => {
  return (
    <div className="profile">
      <RegisterDropDown />
      <Submission />
      <Report />
    </div>
  );
};
export default Profile;
