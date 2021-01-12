import React, { useState } from "react";
import { randomNumber } from "../utils";

function Numbers() {

  const [numbers, setNumbers] = useState([])
  
  const [filterBy, setFilterBy] = useState("All")


  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber]
    setNumbers(newNumberArray)
    console.log(newNumber);
  }

  function clickHandler(num) {
    const newNumberArray = numbers.map((number) => {
      if (number === num) {
        return num + 100
      } else {
        return number
      }
    })
    setNumbers(newNumberArray)
  }

  function filterHandler(event) {
    setFilterBy(event.target.value)
  }

  let numbersToDisplay = numbers
  if (filterBy === "Even") {
    numbersToDisplay = numbers.filter((num) => num % 2 === 0)
  } else if (filterBy === "Odd") {
    numbersToDisplay = numbers.filter((num) => num % 2 != 0)
  }

  const numberList = numbersToDisplay.map((num) => <li key={num} onClick={() => clickHandler(num)}>{num}</li>)

  

  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <select name="filter" onChange={filterHandler}>
        <option value="All">All</option>
        <option value="Even">Even</option>
        <option value="Odd">Odd</option>
      </select>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
