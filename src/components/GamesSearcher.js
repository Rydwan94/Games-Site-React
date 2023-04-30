import { useContext } from 'react';

import { themeContext } from '../context/AppProvider';

import {FaSearch} from "react-icons/fa"

import '../css/GamesSearcher.css'

const GamesSearcher = () => {

  const {handleSearchButton, handleSearchInput, searchValue} = useContext(themeContext)

    return ( 
        <div className="gameSearcher">
                   <label htmlFor="gameSearch">
            Find Game        
            <FaSearch />
            <input type="text" id="gameSearch" placeholder="search..." value={searchValue} onChange={handleSearchInput}/>
          </label>
          <div className='gameTypeButtons'>
            <button onClick={() => handleSearchButton('All')}>All</button>
            <button onClick={() => handleSearchButton('Rpg')}>RPG</button>
            <button onClick={() => handleSearchButton('Action')}>Action</button>
            <button onClick={() => handleSearchButton('Shooter')}>Shooter</button>
            <button onClick={() => handleSearchButton('Horror')}>Horror</button>
          </div>
      
        </div>
     );
}
 
export default GamesSearcher;