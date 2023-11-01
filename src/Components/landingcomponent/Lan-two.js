import { FaFont } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function SkillsComponent() {
  return (
    <>
      <div>
        <div className="typography-skill">
          <span></span>
          <span></span>
        </div>
        <div className="typography-skill-bottom">
          <FaFont />
          <span>Typography</span>
        </div>
      </div>

      <div>
        <div className="design-skill">
          <span></span>
          <span></span>
        </div>
        <div className="design-skill-bottom">
          <FaPencilAlt />
          <span>Design</span>
        </div>
      </div>

      <div>
        <div className="development-skill">
          <span></span>
          <span></span>
        </div>
        <div className="development-skill-bottom">
          <FaCode />
          <span>Development</span>
        </div>
      </div>
    </>
  );
}

export default SkillsComponent;
