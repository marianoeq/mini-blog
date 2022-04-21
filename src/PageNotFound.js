import { Link } from "react-router-dom";
import image from "./images/notfoundpic.jpg";
const PageNotFound = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 600,
          width: 600,
        }}
      >
        <h2 className="notFound">We couldn't find your page 😔</h2>
        <Link className="notFoundLink" to="/">
          Click here to return to the Home page...
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
