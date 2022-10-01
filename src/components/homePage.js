import { ReactComponent as Theme } from "../assets/bg.svg";
import RegisterDropDown from "./register";

const HomePage = () => {
  return (
    <>
      <RegisterDropDown />
      <Theme />
      <div className="entance roll-in-left">
        <h1 className="hightlight tracking-in-expand">Build Your Resume</h1>
      </div>
    </>
  );
};

export default HomePage;
