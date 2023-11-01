import frontpageteamthree from "../../../images/front-page/frontpageteamthree.jpg";

import frontpagetestimonialtwo from "../../../images/front-page/frontpagetestimonialtwo.jpg";
import frontpagetestimonialone from "../../../images/front-page/frontpagetestimonialone.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function TestiMonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="content-five">
          <h1>Testimonials</h1>
          <div></div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={250}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="carousel">
              <img src={frontpageteamthree} alt="" width={150} height={150} />
              <p>
                Awesome theme with great design and helpful support. If you
                don’t know how to code your own WordPress theme, but you still
                want a good-looking website for your business, Illdy might be
                exactly what you need. It is a slick theme with a lot of of
                features to choose from. You can customize whatever section you
                want and you can rest assure that no matter what device your
                website is viewed on – it looks great.
              </p>
              <h5>mike muller</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="carousel">
              <img
                src={frontpagetestimonialtwo}
                alt=""
                width={150}
                height={150}
              />
              <p>
                Awesome theme with great design and helpful support. If you
                don’t know how to code your own WordPress theme, but you still
                want a good-looking website for your business, Illdy might be
                exactly what you need. It is a slick theme with a lot of of
                features to choose from. You can customize whatever section you
                want and you can rest assure that no matter what device your
                website is viewed on – it looks great.
              </p>
              <h5>jane smith</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="carousel">
              <img
                src={frontpagetestimonialone}
                alt=""
                width={150}
                height={150}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident aspernatur, suscipit cum sed blanditiis, eveniet modi
                debitis distinctio asperiores in similique eligendi illo tenetur
                error pos
              </p>
              <h5>aigars silkalns</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel">
              <img
                src={frontpagetestimonialone}
                alt=""
                width={150}
                height={150}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident aspernatur, suscipit cum sed blanditiis, eveniet modi
                debitis distinctio asperiores in similique eligendi illo tenetur
                error pos
              </p>
              <h5>aigars silkalns</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TestiMonials;
