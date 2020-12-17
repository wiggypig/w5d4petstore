import React from "react";
import "./style.css";
import Animal from './components/Animal';

function App() {
  let dataArr = [
    {id:1, name:"Tim", location:"Lake"},
    {id:2, name:"John", location:"River"},
  ]
  let listItem = dataArr.map((val, id) => {
    return(
      <li key={val.id}>Name: {val.name}
      location: {val.location}
      </li>
    )
  })
  return (
    <div className="App">
      <ul>{listItem}</ul>
      <Animal />
    </div>
  );
}
export default App;
