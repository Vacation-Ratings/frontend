import '../css/Footer.css';

function Footer() {
  let style = {
    margin: "0rem 3rem 1rem",
  }
  return (
    <div className="footer" style={style}>
      <h6>
        &copy; Vacation Ratings Inc.
      </h6>
    </div>
  );
}

export default Footer;
