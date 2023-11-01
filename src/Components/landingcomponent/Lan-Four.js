import randomblogpost3 from "../../images/blog/randomblogpost3.jpg";
import blog2 from "../../images/blog/blog2.jpeg";
import randomblogpost4 from "../../images/blog/randomblogpost4.jpg";
import { FaChevronCircleRight } from "react-icons/fa";

function CardComponent() {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 p-lg-0">
        <div className="card-four">
          <img src={randomblogpost3} alt="" width={150} height={250} />
          <div className="title-info">
            <h3 className="fw-bold ">We Have Made Illdy Theme SEO Friendly</h3>
            <p className="text-secondary">
              Illdy One Page WordPress theme is fully SEO friendly and is ready
              to help you to achieve the highest rankings…
            </p>
            <a href="/">
              {" "}
              <FaChevronCircleRight /> Read more{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card-four">
          <img src={blog2} alt="" width={150} height={250} />
          <div className="title-info">
            <h3 className="fw-bold ">Hello world!</h3>
            <p className="text-secondary">
              This theme is not just free, it is free for private and commercial
              use since it is licensed under GPL…
            </p>
            <a href="/">
              {" "}
              <FaChevronCircleRight /> Read more{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-4 p-lg-0">
        <div className="card-four">
          <img src={randomblogpost4} alt="" width={150} height={250} />
          <div className="title-info">
            <h3 className="fw-bold ">We Have Made Illdy Theme SEO Friendly</h3>
            <p className="text-secondary">
              Illdy One Page WordPress theme is fully SEO friendly and is ready
              to help you to achieve the highest rankings…
            </p>
            <a href="/">
              {" "}
              <FaChevronCircleRight /> Read more{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
