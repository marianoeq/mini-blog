//THIS IS THE CUSTOM HOOK FILE TO FETCH//

import { useEffect, useState } from "react";

const useFetch = (url) => {
  //I added url as a parameter so when I use this hook I pass the url where I want to do the fetching.
  const [data, setData] = useState(null); //This state before was called blog. I've changed it as I need a more general name to make use of it anywhere
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); //Function to stop fetching data. So when we move to another link we won't get an error in the console.
    setTimeout(() => {
      //I'm using setTimeOut to delay the fetching so the message coming from [is pending]"loading..." appears on the browser.
      const fetchData = async () => {
        try {
          //try/catch(line 29) to catch an error in case there is a problem fetching data.
          const response = await fetch(url, { signal: abortController.signal }); //As I want to make this custom hook reusable I've got rid of the url here and add instead the url as an argument.
          if (!response.ok) {
            //if the response is not ok it will throw an error
            throw Error("Couldn't fetch");
          }
          const data = await response.json();
          setData(data);
          setIsPending(false); //Once the data is retrieve the state changes to false and the loading message goes away
          setError(null);
          console.log(data);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            //The error is gonna be caught
            setIsPending(false); //The message "is loading" will stop
            setError(err.message); // the message "couldn't fetch" launches
          }
        }
      };

      fetchData(); //Calling fetch function  from line 12
    }, 2000);
    return () => abortController.abort(); // we are calling the function in line 12.
  }, [url]); //As a dependency I set the url so every time the url changes is gonna re-render the useEffect function.

  return { data, isPending, error }; //I return an object with these 3 properties that come from the states. Because in a future when I want to use this UseFetch file in another file I want to be able to grab these 3 properties and use them.
};

export default useFetch;

//In this file I'm gonna do the fetching that I did in Home.js component but with a custom hook.
