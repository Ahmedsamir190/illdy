function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div>
            <h3>PRODUCTS</h3>
            <ul>
              <li>Our work </li>
              <li>Club</li>
              <li>News</li>
              <li>Announcement</li>
            </ul>
          </div>
          <div>
            <h3>INFORMATION</h3>
            <ul>
              <li>Pricing </li>
              <li>Terms</li>
              <li>Affiliates</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <ul>
              <li>Documentation </li>
              <li>FAQs</li>
              <li>Forums</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>{date} All Right Reserved | Ahmed Samir</p>
      </div>
    </footer>
  );
}

export default Footer;
