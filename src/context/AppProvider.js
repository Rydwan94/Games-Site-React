import { createContext, useState } from "react";

export const themeContext = createContext();

const Provider = ({ children }) => {
  const [gameTypeValue, setGameTypeValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [games, setGames] = useState([
    {
      id: 0,
      title: "God Of War Ragnarok",
      imgPath:
        "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
      alt: "game1",
      type: "Action",
      infoPath: "https://www.gry-online.pl/gry/god-of-war-ragnarok/zf5d1e",
    },
    {
      id: 1,
      title: "Diablo IV",
      imgPath:
        "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt197bfce3b1cb7880/6286c2cccf13bb4bbe6278ad/open-graph.jpg",
      alt: "game2",
      type: "Rpg",
      infoPath: "https://www.gry-online.pl/gry/diablo-iv/z259b2",
    },
    {
      id: 3,
      title: "Dying Light 2",
      imgPath:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7",
      alt: "game3",
      type: "Horror",
      infoPath: "https://www.gry-online.pl/gry/dying-light-2/z55376",
    },
    {
      id: 4,
      title: "Counter Strike 2",
      imgPath:
        "https://pliki.ppe.pl/storage/cfc6f52b6d59ac25b7f3/cfc6f52b6d59ac25b7f3.jpg",
      alt: "game4",
      type: "Shooter",
      infoPath: "https://www.gry-online.pl/gry/counter-strike-2/za659f",
    },
    {
      id: 5,
      title: "Star Wars Jedi: Survivor",
      imgPath:
        "https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S2_1200x1600-fd090aecb23a065b29ea101939798edd",
      alt: "game5",
      type: "Action",
      infoPath: "https://www.gry-online.pl/gry/star-wars-jedi-survivor/zd61db",
    },
    {
      id: 6,
      title: "Doom Eternal",
      imgPath:
        "https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/4f08db516cdcd51dc44d3c0474484b3b/doom_eternal_bg_date_m_w_launch.jpg?q=70",
      alt: "game6",
      type: "Shooter",
      infoPath: "https://www.gry-online.pl/gry/doom-eternal/z253b8",
    },
    {
      id: 7,
      title: "Outlast 2",
      imgPath:
        "https://image.api.playstation.com/cdn/EP4467/CUSA06633_00/8jdfNPVFM9lSN84bPAAIDXfEw2a2BSZW.png",
      alt: "game7",
      type: "Horror",
      infoPath: "https://www.gry-online.pl/gry/outlast-2/ze3ef0",
    },
  ]);

  const [filteredGames, setFilteredGames] = useState(games);

  const handleSearchButton = (type) => {
    setGameTypeValue(type);

    switch (type) {
      case "All":
        setFilteredGames(games.map((item) => item));
        setSearchValue('')
        break;
      case "Rpg":
        setFilteredGames(games.filter((item) => item.type === "Rpg"));
        setSearchValue('')
        break;
      case "Action":
        setFilteredGames(games.filter((item) => item.type === "Action"));
        setSearchValue('')
        break;
      case "Shooter":
        setFilteredGames(games.filter((item) => item.type === "Shooter"));
        setSearchValue('')
        break;
      case "Horror":
        setFilteredGames(games.filter((item) => item.type === "Horror"));
        setSearchValue('')
        break;
      default:
        setFilteredGames(games);
        break;
    }
  };

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);

    const searchedGame = games.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredGames(searchedGame);
  };

  return (
    <themeContext.Provider
      value={{
        games: filteredGames,
        searchValue,
        setSearchValue,
        handleSearchButton,
        handleSearchInput,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default Provider;
