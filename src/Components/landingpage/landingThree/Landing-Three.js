import frontpageproject1 from "../../../images/front-page/frontpageproject1.png";
import frontpageproject2 from "../../../images/front-page/frontpageproject2.png";
import frontpageproject3 from "../../../images/front-page/frontpageproject3.jpg";
import frontpageproject4 from "../../../images/front-page/frontpageproject4.jpg";

function LandingThree() {
  return (
    <section className="landing-three">
      <div className="container">
        <div className="content-three">
          <h1 className="fw-bold">Projects</h1>
          <p className="pb-5 text-secondary">
            You'll love our work. Check it out!
          </p>

          <div className="row row-three-image">
            <div className="col-sm-6 col-md-6 col-lg-3 p-0 layout">
              <img src={frontpageproject1} alt="" width={100} height={280} />
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 p-0 layout ">
              <img src={frontpageproject2} alt="" width={100} height={280} />
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 p-0 layout ">
              <img src={frontpageproject3} alt="" width={100} height={280} />
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 p-0 layout ">
              <img src={frontpageproject4} alt="" width={100} height={280} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingThree;
