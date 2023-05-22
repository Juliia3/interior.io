import "./team.scss";

import team from "../../assets/images/team.jpg";

function Team() {
  return (
    <div className="team">
      <div className="team__container">
        <h2 className="team__sub-title sub-title">OUR TEAM</h2>
        <h1 className="team__title title">Meet With Our Team</h1>
        <img className="team__img" src={team} />
        <div className="team__table container">
          <div className="team__box">
            <p className="team__name">Cody Fisher</p>
            <p className="team__name">-</p>
            <p className="team__name">CEO</p>
          </div>
          <div className="team__box">
            <p className="team__name">Savannah Nguyen</p>
            <p className="team__name">-</p>
            <p className="team__name">Interior architect</p>
          </div>
          <div className="team__box">
            <p className="team__name">Cameron Williamson</p>
            <p className="team__name">-</p>
            <p className="team__name">Architect</p>
          </div>
          <div className="team__box">
            <p className="team__name">Jerome Bell</p>
            <p className="team__name">-</p>
            <p className="team__name">Interior</p>
          </div>
          <div className="team__box">
            <p className="team__name">Marvin McKinney</p>
            <p className="team__name">-</p>
            <p className="team__name">Construction head</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
