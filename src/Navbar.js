import { Link } from "react-router-dom"; //By importing the Link Tag and using it in line 9 and 10 I'm rendering all the requests for those links from the react compiled JS files instead of from the server.
const Navbar = () => {
  const title =
    "Welcome To The Mini Blog"; /* This is the value for the dynamic value below */
  return (
    <nav className="navbar">
      <h1>{title}</h1> {/* This is a dynamic value */}
      <div className="links">
        <Link to="/">Home Page</Link>
        {/*When using the link tags I've to use "to" instead of "href"*/}
        <Link
          to="/Create"
          style={{
            /* This is the way to inline style by creating an object insie an object */
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
