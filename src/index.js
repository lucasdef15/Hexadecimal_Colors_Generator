import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Heade component
const Header = () => {
  return (
    <header>
      <h1>30 Days Of React</h1>
      <h3>Hexadecimal Colors</h3>
    </header>
  );
};
//Color component
const HexaColors = ({ color }) => {
  return (
    <div className="color" style={{ background: color }}>
      <p>{color}</p>
    </div>
  );
};

//Main component
const Main = ({ colors }) => {
  const colorsList = colors.map((color) => {
    return <HexaColors key={color} color={color} />;
  });
  return (
    <main>
      <div className="mainWrapper">{colorsList}</div>
    </main>
  );
};

//App Component
const App = () => {
  const colors = [];
  //Hexadecimal generator
  const heaxaGenerator = () => {
    const hexa = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexa.length);
      color += hexa[index];
    }
    return "#" + color;
  };
  for (let i = 0; i < 32; i++) {
    let color = heaxaGenerator();
    if (!colors.includes(color)) {
      colors.push(color);
    } else {
      i--;
    }
  }
  return (
    <div className="appContainer">
      <Header />
      <Main colors={colors} />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);
