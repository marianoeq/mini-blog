import { useState } from "react";
import { useHistory } from "react-router-dom"; //This Hook allows us to re-direct the user to different pages of our website.

const Create = () => {
  const [title, setBlogTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Writer - 1");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory(); // Invoking the hook

  const handleSubmit = (e) => {
    e.preventDefault(); //This function prevent the page to refresh after we click the submit button.
    const blog = { title, body, author }; // Keeping track of each state mentioned above after we submit the new blog.
    console.log("refreshed prevented");

    setIsPending(true);
    const postingBlog = async () => {
      //Posting blog function is sending a POST request to the endpoint(Sending a new blog to json server)
      await fetch("http://localhost:8080/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      setIsPending(false);
      history.push("/"); // Making use of history hook by adding the method push and specifying where we take the user to after he submits the new blog.
    };
    postingBlog();
    console.log("New blog added");
  };

  return (
    <div className="create">
      <h1>Create a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Writer1">Writer - 1</option>
          <option value="Writer2">Writer - 2</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {/* Because the button is inside the form, it fires a submit event on the form itself. Other option could be to add a click event on the button */}
        {isPending && <button disabled>Submitting blog...</button>}
      </form>
    </div>
  );
};

export default Create;
// fill the whole form and store all that informarion in a state.
// Create state or update the data one. => HOW?
// by adding an event to the button.
// That function linked to the event is gonna s
