import React from "react";
import ReactDOM from "react-dom/client";

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  //const isGoal = props.isGoal;
  return <>{props.isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && (
        <h2>You have {cars.length} cars in your garage. Which is many cars.</h2>
      )}
    </>
  );
}

const cars = ["Ford", "BMW", "Audi"];

/* This is a expanded way to get root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={true} />);
