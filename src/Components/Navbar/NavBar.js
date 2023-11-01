import headerlogo from "../../images/headerlogo.png";

function NavBar() {
  return (
    <header>
      <div className="container">
        <div>
          <div className="content">
            <img width={150} height={50} src={headerlogo} alt="photo" />
            <nav>
              <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Our Team</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
