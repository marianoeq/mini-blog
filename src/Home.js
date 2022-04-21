import BlogList from "./BlogsList";
import useFetch from "./useFetch";
const Home = () => {
  //In line 5 I'm destructuring the properties from the retrun in useFetch and calling useFetch and passing to eat the endpoint(url)
  const { data, isPending, error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {/* //Lines where it says isPendding or blogs etc, is conditional templating. By using the logical and (&&). 
      the code evaluates the left side(blogs or isPending or error) and when blogs received the data from the fetching
      the logic is true, therefore the Bloglist component is gonna output to the browser.
      If the data hasn't got to (blogs) that logical will be false so Bloglist won't be render. */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;

//DOWN HERE I WAS PRACTICING HOW TO MAKE A VALUE REACTIVE WITH USESTATE..FOR EX CHANGING THE NAME AND AGE BY
//CLICKING THE BUTTON WHICH IS HOLDING AN EVENT AND THE NAME OF THE FUNCTION
/* const [name, setName] = useState('Mariano')
    const [age, setAge] = useState(31)
    
    const handleClick = () => {
        setName('Juan')
        setAge('33')
    };
    <button onClick={handleClick}>Button</button>
    <p> { name } is { age }</p> */
