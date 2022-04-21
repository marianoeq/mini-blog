import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch"; //Importing the custom hook (useFetch)
const BlogDetails = () => {
  const { id } = useParams(); //This hook allows us to grab parameters from the route Ex: blogs/:id <= id is the parameter
  const { data, isPending, error } = useFetch(
    "http://localhost:8080/blogs/" + id
  );
  const history = useHistory();
  const handleClick = async () => {
    await fetch("http://localhost:8080/blogs/" + id, {
      method: "DELETE",
    });
    history.push("/")
    
    console.log("deleting", data.id);
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <h1>{data.title}</h1>
          <div>{data.body}</div>
          <p>Written by {data.author}</p>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
