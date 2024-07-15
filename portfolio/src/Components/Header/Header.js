import React from "react";
import Typing from "react-typing-effect"; // Import Typing from react-typing-effect
import profileImg from "../../assets/profileImg.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Mohana sree </h2>
        <h2>
          I'm a {""}
          <Typing
            text={[
              "Full Stack Developer ",
              "Frontend Developer ✅",
              "Backend Developer ",
              "React Developer ⚛️",
            ]}
            speed={10} // Adjust typing speed (milliseconds per character)
            loop={Infinity} // Repeat typing continuously
            wrapper="b" // Wrap each step in a <b> tag for bold text
          />
        </h2>
        <p>
          I bring the full web development spectrum to life! I'm comfortable
          building user-friendly interfaces (front-end) and crafting the
          powerful engines behind them (back-end). From data wrangling to
          dazzling visuals, I'm passionate about creating seamless web
          experiences.
        </p>
        {/* Payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          //?THESE ARE FROM FONT AWESOME
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
