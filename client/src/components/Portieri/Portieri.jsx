import React, { useState, useEffect } from "react";
import teamsPlayers from "../../staticFile/json/Quotazioni_Fantacalcio_Stagione_2022_23.json";

const Portieri = () => {
  const [goalKeepers, setGoalKeepers] = useState([...teamsPlayers[0].Portieri]);

  const [activePlayer, setActivePlayer] = useState({});

  useEffect(() => {
    console.log(activePlayer);
  }, [activePlayer]);

  function selectRandomGoalKeeper(event) {
    if (goalKeepers.length > 0) {
      const inputName = event.target.name;
      const randomIndex = Math.floor(Math.random() * goalKeepers.length);
      const randomPlayer = goalKeepers[randomIndex];
      setActivePlayer(randomPlayer);
      const values = [...goalKeepers];
      console.log(values);
      const deletedPlayer = values.splice(randomIndex, 1);
      console.log(values);
      setGoalKeepers(values);
    } else if (goalKeepers.length === 0) {
      console.log("i portieri sono finiti");
    }
  }
  return (
    <div>
      <h2>Portieri</h2>
      <button
        type="button"
        name="randomGoalKeeper"
        id="randomGoalKeeper"
        onClick={(event) => {
          selectRandomGoalKeeper(event);
        }}
      >
        Estrai un portiere casuale
      </button>{" "}
      <hr />
      {activePlayer !== undefined && goalKeepers.length !== 0 && (
        <div>
          <h3>{activePlayer.Column4}</h3>
          <p>
            {activePlayer.Column2} - {activePlayer.Column5}
          </p>
          <p>quotazione: {activePlayer.Column6}</p>
        </div>
      )}
      {goalKeepers.length === 0 && activePlayer === undefined && (
        <>
          <h1>I portieri sono finiti</h1>
        </>
      )}
    </div>
  );
};

export default Portieri;
