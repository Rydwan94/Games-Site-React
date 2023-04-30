import "../css/GameCard.css";

const GameCard = ({ imgPath, alt, title, infoPath }) => {
  return (
    <div className="singleGame">
      <div className="gameInfo">
        <img src={imgPath} alt={alt} />
        <h3>{title}</h3>
      </div>
      <div className="gameInfoButton">
        <a href={infoPath}>
          <button>Show More</button>
        </a>
      </div>
    </div>
  );
};

export default GameCard;
