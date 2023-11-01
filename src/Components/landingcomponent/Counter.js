import CountUp from "react-countup";

function CounterPage() {
  return (
    <section className="landing-five-counter d-flex align-items-center justify-content-center text-center fs-1 fw-bold text-white">
      <div className="container">
        <div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="logo-number ">
                <CountUp
                  start={0}
                  end={150}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                />
                <h4>Clients</h4>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="logo-number">
                <CountUp
                  start={0}
                  end={350}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                />
                <h4>Project</h4>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="logo-number special">
                <CountUp
                  start={0}
                  end={650}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                />
                <h4>COFFES</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CounterPage;
