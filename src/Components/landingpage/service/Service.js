import { FaPencilAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Service() {
  return (
    <section className="part-six">
      <div className="container">
        <div className="content-six">
          <h1>Services</h1>
          <p>
            In order to help you grow your business, our carefully selected
            experts can advise you in in the following areas:
          </p>
          <div className="service">
            <div>
              <FaPencilAlt />
              <h3>Web Design</h3>
              <p>
                Consectetur adipiscing elit. Praesent molestie urna hendrerit
                erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                augue dapibus porttitor at in mauris. Pellentesque commodo.
              </p>
            </div>
            <div>
              <FaCode />
              <h3>WEB DEVELOPMENT</h3>
              <p>
                Consectetur adipiscing elit. Praesent molestie urna hendrerit
                erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                augue dapibus porttitor at in mauris. Pellentesque commodo.
              </p>
            </div>
            <div>
              <FaMagnifyingGlass />
              <h3>SEO Analisys</h3>
              <p>
                Consectetur adipiscing elit. Praesent molestie urna hendrerit
                erat tincidunt tempus. Aliquam a leo risus. Fusce a metus non
                augue dapibus porttitor at in mauris. Pellentesque commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
