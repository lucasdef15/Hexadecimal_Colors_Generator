# Exercises

## Exercises: Level 1

1. Why you need to map an array ?
  to get its values and put it into a JSX element.

2. Why we need keys during mapping an array ?
  React needs it to identfy each item which have changed, added, or removed.

3. What is the importance of destructuring your code ?
  it makes it easy to deal with data in React.

4. Does destructuring make your code clean and easy to read ?
  YES definilly!

## Exercises: Level 2

1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component

![Number Generator](../images/day_6_number_generater_exercise.png)

2. Create the following hexadecimal colors using React component

![Number Generator](../images/day_6_hexadecimal_colors_exercise.png)

## Exercises: Level 3

1.Make the following bar group using the given [data](../06_Day_Map_List_Keys/06_map_list_keys_boilerplate/src/data/ten_most_highest_populations.js)

````js
import React from "react";
import ReactDOM from "react-dom";
import tenHighestPopulation from "./ten_most_highest_populations.js";
import "./index.css";

// Header component
const Header = () => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <h3>World population</h3>
      <p>Ten most populated countries</p>
    </header>
  );
};

//the greater population
const largestPopulation = tenHighestPopulation.reduce((max, current) => {
  return current.population > max.population ? current : max;
}, tenHighestPopulation[0]);

// Graph component
const Graph = ({ Country: { country, population } }) => {
  const size = (population * 300) / largestPopulation.population;
  const widthStyle = {
    width: size,
    height: "100%",
    backgroundColor: "orangered",
  };

  return (
    <div className="dataWrapper">
      <div className="name">{country}</div>
      <div className="fillContent">
        <div style={widthStyle}></div>
      </div>
      <div className="population">{population}</div>
    </div>
  );
};

// Main component
const Main = ({ countries }) => {
  const countriesList = countries.map((country) => (
    <Graph key={country.country} Country={country} />
  ));
  return <div className="tbContainer">{countriesList}</div>;
};

//App component
const App = () => {
  return (
    <div>
      <Header />
      <Main countries={tenHighestPopulation} />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);

````
<!-- index.css -->
````css
*{
    margin: 0;
    padding: 0;
}

header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
}
header h1{
    margin: 2em 0 1em 0;
}
header h3{
    margin-bottom: .5em ;
}
.tbContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.dataWrapper{
    display: flex;
    gap: 5px;

}
.name{
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 200px;
    height: 30px;
    text-align:left;
    background-color: steelblue;
    color: white;
    border: 1px solid black;
}
.fillContent{
    width: 300px;
    height: 30px;
    border: 1px solid black;
    /* overflow: hidden; */
}
.population{
    display: flex;
    align-items: center;
    width: 200px;
    height: 30px;
    background-color: steelblue;
    color: white;
    border: 1px solid black;
    padding-left: 10px;
}
````

![Ten most highest populations](../images/day_6_ten_highest_populations_exercise.png)

🎉 CONGRATULATIONS ! 🎉