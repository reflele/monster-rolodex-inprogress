import React, { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import MonsterCards from "./MonsterCards";
import MonsterList from "./MonsterList";

function App() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  // <img
  //   alt="monster"
  //   src={`https://robohash.org/${id}?set=set2&size=180x180`}
  // />;
    const [monsters, setMonster] = useState([])
    // const monsters =  [
    //     {
    //         id: 1,
    //         name: "Lasse",
    //         email: "lasse.d@live.dk",
    //     },
    //     {
    //         id: 2,
    //         name: "Mo",
    //         email: "mo@mail.dk",
    //     }
    // ]

    const getData = async () => {
        const res = await fetch(URL);
        const json = await res.json();
       return json
    }

    useEffect( async () => {
        const monsters = await  getData();
        setMonster(monsters)
        console.log(monsters)
    }, [])

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
        <MonsterList monsters={monsters}></MonsterList>
    </div>
  );
}

export default App;
