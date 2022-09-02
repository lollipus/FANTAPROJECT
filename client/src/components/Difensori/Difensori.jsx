import React, { useState, useEffect } from "react";
import teamsPlayers from "../../staticFile/json/Quotazioni_Fantacalcio_Stagione_2022_23.json";

const Difensori = () => {
  const [defenders, setDefenders] = useState([...teamsPlayers[0].Difensori]);
  const [activePlayer, setActivePlayer] = useState({});
  useEffect(() => {
    console.log(activePlayer);
  }, [activePlayer]);

  function selectRandomDefender(event) {
    if (defenders.length > 0) {
      const inputName = event.target.name;
      const randomIndex = Math.floor(Math.random() * defenders.length);
      const randomPlayer = defenders[randomIndex];
      setActivePlayer(randomPlayer);
      const values = [...defenders];
      console.log(values);
      const deletedPlayer = values.splice(randomIndex, 1);
      console.log(values);
      setDefenders(values);
    } else if (defenders.length === 0) {
      console.log("i difensori sono finiti");
    }
  }
  return (
    <div>
      <h2>Difensori</h2>
      <button
        type="button"
        name="randomDefender"
        id="randomDefender"
        onClick={(event) => {
          selectRandomDefender(event);
        }}
      >
        Estrai un difensore casuale
      </button>{" "}
      <hr />
      {activePlayer !== undefined && defenders.length !== 0 && (
        <div>
          <h3>{activePlayer.Column4}</h3>
          <p>
            {activePlayer.Column2} - {activePlayer.Column5}
          </p>
          <p>quotazione: {activePlayer.Column6}</p>
        </div>
      )}
      {defenders.length === 0 && activePlayer === undefined && (
        <>
          <h1>I difensori sono finiti</h1>
        </>
      )}
    </div>
  );
};

export default Difensori;
