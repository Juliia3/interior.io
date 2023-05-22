import "./projects.scss";
import Button from "../Button/Button";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import project from "../../assets/images/project.png";

// import gallery img for desktop
import galleryDesk1 from "../../assets/images/gallery-desk1.jpg";
import galleryDesk2 from "../../assets/images/gallery-desk2.jpg";
import galleryDesk3 from "../../assets/images/gallery-desk3.jpg";
import galleryDesk4 from "../../assets/images/gallery-desk4.jpg";
import galleryDesk5 from "../../assets/images/gallery-desk5.jpg";
import galleryDesk6 from "../../assets/images/gallery-desk6.jpg";
import galleryDesk7 from "../../assets/images/gallery-desk7.jpg";
import galleryDesk8 from "../../assets/images/gallery-desk8.jpg";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container container">
        <h2 className="projects__sub-title sub-title">OUR PROJECT</h2>
        <h1 className="projects__title title">Our Latest Projects</h1>
        <div className="projects__gallery">
          <img className="projects__img gallery1" src={gallery1} />
          <img className="projects__img gallery2" src={gallery2} />
          <img className="projects__img gallery3" src={gallery3} />
          <img className="projects__img gallery4" src={gallery4} />
        </div>

        {/* add block "projects__gallery-desk" for desktop  */}
        <div className="projects__gallery-desk">
          <img
            className="projects__img-desk gallery-desk1"
            src={galleryDesk1}
          />
          <img
            className="projects__img-desk gallery-desk2"
            src={galleryDesk2}
          />
          <img
            className="projects__img-desk gallery-desk3"
            src={galleryDesk3}
          />
          <img
            className="projects__img-desk gallery-desk4"
            src={galleryDesk4}
          />
          <img
            className="projects__img-desk gallery-desk5"
            src={galleryDesk5}
          />
          <img
            className="projects__img-desk gallery-desk6"
            src={galleryDesk6}
          />
          <img
            className="projects__img-desk gallery-desk7"
            src={galleryDesk7}
          />
          <img
            className="projects__img-desk gallery-desk8"
            src={galleryDesk8}
          />
        </div>

        <div className="projects__experience">
          <div className="projects__experience-text">
            <h1 className="projects__experience-title title">
              We Create Digital Experience
            </h1>
            <div className="projects__perc-box">
              <div className="projects__perc">
                <h2 className="projects__number-perc">75%</h2>
                <p className="projects__number-text text">Architecture</p>
              </div>
              <div className="projects__perc">
                <h2 className="projects__number-perc">85%</h2>
                <p className="projects__number-text text">Construction</p>
              </div>
              <div className="projects__perc">
                <h2 className="projects__number-perc">65%</h2>
                <p className="projects__number-text text">Interior Design</p>
              </div>
            </div>
            <Button />
          </div>

          <img className="projects__scheme project" src={project} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
