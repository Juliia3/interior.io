import Button from "../Button/Button";
import "./main.scss";

import main from "../../assets/images/main.jpg";
import mainBig from "../../assets/images/main-big.jpg";

function Main(props) {
  const { subTitle, title, text } = props;

  return (
    <main className="main">
      <div className="main__container container">
        <h2 className="main__sub-title sub-title">{subTitle}</h2>
        <h1 className="main__title title">{title}</h1>
        <p className="main__text text">{text}</p>
        <Button />
      </div>
      <img className="main__img" src={main} />
      <img className="main__img-big" src={mainBig} />
    </main>
  );
}

export default Main;
