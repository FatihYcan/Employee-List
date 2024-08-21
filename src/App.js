import React from "react";
import List from "./components/List";
import { useState } from "react";
import data from "./helper/data";

function App() {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > data.length - 5) {
      return 0;
    }
    if (number < 0) {
      return data.length - 5;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 5;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 5;
      return checkNumber(newIndex);
    });
  };

  return (
   <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List data={data.slice(index, index + 5)} />
        <div className="btns">
          <button onClick={prevPerson}>Prev</button>
          <button onClick={nextPerson}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
