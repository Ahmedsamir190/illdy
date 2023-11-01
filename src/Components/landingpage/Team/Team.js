import frontpagetestimonial from "../../../images/front-page/frontpagetestimonial.jpg";
import frontpagetestimonialtwo from "../../../images/front-page/frontpagetestimonialtwo.jpg";
import frontpagetestimonialone from "../../../images/front-page/frontpagetestimonialone.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="team-content">
          <h1>Teams</h1>
          <p>
            Meet the people that are going to take your business to the next
            level.
          </p>
          <div className="team-member">
            <div className="member-one">
              <div>
                <img
                  src={frontpagetestimonial}
                  alt="photo"
                  width={130}
                  height={130}
                />
              </div>
              <div>
                <h4>Mark Lawrance</h4>
                <span>Web Designer</span>
                <p>Creative, detail-oriented, always focused.</p>
                <div className="icons-one">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="member-two">
              <div>
                <img
                  src={frontpagetestimonialtwo}
                  alt="photo"
                  width={130}
                  height={130}
                />
              </div>
              <div>
                <h4>Jane Stenton</h4>
                <span>SEO Specialist</span>
                <p>
                  Curious, tech-geeck and gets serious when it comes to work
                </p>
                <div className="icons-two">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>{" "}
              </div>
            </div>
            <div className="member-three">
              <div>
                <img
                  src={frontpagetestimonialone}
                  alt="photo"
                  width={130}
                  height={130}
                />
              </div>
              <div>
                <h4>John Smith</h4>
                <span>Developer</span>
                <p>Enthusiastic, passionate with great sense of humor.</p>
                <div className="icons-three">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
