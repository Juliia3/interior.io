import "./about.scss";

import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import desk1 from "../../assets/images/desk1.jpg";
import desk2 from "../../assets/images/desk2.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__container container">
        <h1 className="about__title title">About Us</h1>
        <p className="about__text text">
          As development continues, engineers may visit building destinations to
          guarantee that temporary workers pursue the plan, keep to the
          timetable, utilize the predefined materials, and meet work-quality
          models.
        </p>
        <div className="about__img-box">
          <img className="about__img about1" src={about1} />
          <img className="about__img about2" src={about2} />
        </div>
        <div className="about__desk">
          <img className="about__img-desk desk1" src={desk1} />
          <img className="about__img-desk desk2" src={desk2} />
        </div>
        <div className="about__number">
          <h2 className="about__number-perc">85%</h2>
          <p className="about__number-text text">Satisfied Clients</p>
        </div>
        <div className="about__img3-box">
          <img className="about__img3" src={about3} />
        </div>
      </div>
    </div>
  );
}

export default About;
