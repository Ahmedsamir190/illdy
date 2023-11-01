import SkillsComponent from "../../../Components/landingcomponent/Lan-two";

function LandingTwo() {
  return (
    <section className="landing-two">
      <div className="container">
        <div className="about-info ">
          <h1>About</h1>
          <p>
            It is an amazng one-page theme with great features that offers an
            incredible experience. It is easy to install, make changes, adapt
            for your business. A modern design with clean lines and styling for
            a wide variety of content, exactly how a business design should be.
            You can add as many images as you want to the main header area and
            turn them into slider.
          </p>
        </div>
        <div className="skills">
          <div className="skills-row">
            <SkillsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingTwo;
