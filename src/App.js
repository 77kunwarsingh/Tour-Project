import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>Sorry...... <br/>No More Tours Left!! <h2>Please refresh the page</h2></h2>
        <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  );
};

export default App;
