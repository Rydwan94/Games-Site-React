import { useContext } from "react";

import { themeContext } from "../context/AppProvider";

import "../css/TopGamePage.css";

import topGame from "../img/topGameImg.jpg";

const TopGame = () => {
  return (
    <div className="topGameContainer">
      <div className="topGameInfo">
        <div className="gameImg">
          <img src={topGame} alt="GodOfWar" />
        </div>
        <h2>God of War Ragnarok</h2>
        <p>
          God of War: Ragnarok is one of the most highly anticipated video games
          of 2022. Developed by Santa Monica Studio and published by Sony
          Interactive Entertainment, the game is a sequel to the critically
          acclaimed God of War (2018), which won numerous awards for its
          stunning visuals, engaging story, and innovative gameplay. In God of
          War: Ragnarok, players once again take on the role of Kratos, a former
          Greek god who has now found himself in the realm of Norse mythology.
          The game picks up where the previous installment left off, with Kratos
          and his son Atreus embarking on a new adventure that will take them to
          the realm of Asgard.
        </p>
        <a href="https://www.gry-online.pl/gry/god-of-war-ragnarok/zf5d1e">
          <button>Check</button>
        </a>
      </div>
    </div>
  );
};

export default TopGame;
