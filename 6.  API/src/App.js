import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchData () {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json(); //for fetch function, using response.json converting to json file format  
    const [item] = data.results;
    setPerson(item);
    }
    fetchData();
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}> Click Me</button>
      {person && <div>{person.name.first} </div>}
    </div>
  );
};

export default App;
