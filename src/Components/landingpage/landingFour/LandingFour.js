import { FaChevronCircleRight } from "react-icons/fa";
import CardComponent from "../../../Components/landingcomponent/Lan-Four";
function LandingFour() {
  return (
    <section className="landing-four">
      <div className="container">
        <div className="content-four">
          <h1 className="fw-bold text-white">Latest News</h1>
          <p className="pb-5 text-secondary">
            If you are interested in the latest articles in the industry, take a
            sneak peek at our blog. You have nothing to loose!
          </p>
          <button>
            {" "}
            <FaChevronCircleRight />
            See blog
          </button>
          <div className="all-card pt-5 px-2">
            <div className="row">
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingFour;
