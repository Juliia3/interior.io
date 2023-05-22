import "./card.scss";
import cardBg from "../../../assets/images/card-bg.png";

function Card(props) {
  const { img, title, text } = props;

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__img" src={img} />
        <img className="card__bg" src={cardBg} />
        <div className="card__text-box">
          <h1 className="card__title title">{title}</h1>
          <p className="card__text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
