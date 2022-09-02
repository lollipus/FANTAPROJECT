import React, { useState, useEffect } from "react";
import teamsPlayers from "../../staticFile/json/Quotazioni_Fantacalcio_Stagione_2022_23.json";

const Attaccanti = () => {
  const [strikers, setStrikers] = useState([...teamsPlayers[0].Attaccanti]);
  const [activePlayer, setActivePlayer] = useState({});
  useEffect(() => {
    console.log(activePlayer);
  }, [activePlayer]);

  function selectRandomStriker(event) {
    if (strikers.length > 0) {
      const inputName = event.target.name;
      const randomIndex = Math.floor(Math.random() * strikers.length);
      const randomPlayer = strikers[randomIndex];
      setActivePlayer(randomPlayer);
      const values = [...strikers];
      console.log(values);
      const deletedPlayer = values.splice(randomIndex, 1);
      console.log(values);
      setStrikers(values);
    } else if (strikers.length === 0) {
      console.log("gli attaccanti sono finiti");
    }
  }
  return (
    <div>
      <h2>Attaccanti</h2>
      <button
        type="button"
        name="randomStriker"
        id="randomStriker"
        onClick={(event) => {
          selectRandomStriker(event);
        }}
      >
        Estrai un attaccante casuale
      </button>{" "}
      <hr />
      {activePlayer !== undefined && strikers.length !== 0 && (
        <div>
          <h3>{activePlayer.Column4}</h3>
          <p>
            {activePlayer.Column2} - {activePlayer.Column5}
          </p>
          <p>quotazione: {activePlayer.Column6}</p>
        </div>
      )}
      {strikers.length === 0 && activePlayer === undefined && (
        <>
          <h1>Gli attaccanti sono finiti</h1>
        </>
      )}
    </div>
  );
};

export default Attaccanti;
