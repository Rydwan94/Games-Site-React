import GamesList from "../components/GamesList";
import GamesSearcher from "../components/GamesSearcher";

import '../css/Games.css'


const Games = () => {
    return (
      <div className="gamesPage">
        <GamesSearcher />
        <GamesList />
      </div>
    );
  };
 
export default Games;