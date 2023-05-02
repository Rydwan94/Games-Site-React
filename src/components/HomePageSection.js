import { useNavigate } from "react-router-dom";

import "../css/HomePageSection.css";

import homePageImg from "../img/homePageImg.png";

const HomePageSection = () => {
  
  const navigateToGames = useNavigate();
  const handleButton = () => {
    navigateToGames("/games");
  };

  return (
    <section className="banner">
      <div className="banner-items">
        <img src={homePageImg} alt="" />
        <div className="banner-text">
          <h1>Welcome to GamingHub</h1>
          <p>
            Your source for the latest games and reviews. Find something 4you!
          </p>
          <button onClick={handleButton}>Games</button>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
