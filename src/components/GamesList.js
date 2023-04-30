import { useContext } from "react";
import { themeContext } from "../context/AppProvider";

import '../css/GamesList.css'

import GameCard from "./GameCard";

const GamesList = () => {

    const context = useContext(themeContext)
    const {games} = context

    const gamesList = games.map(game => <GameCard key={game.id} {...game} />)

    return ( 
        <div className="gamesContainer">
            {gamesList}
        </div>
     );
}
 
export default GamesList;