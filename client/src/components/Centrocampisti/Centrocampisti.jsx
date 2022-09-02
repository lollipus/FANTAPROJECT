import React, { useState, useEffect } from "react";
import teamsPlayers from "../../staticFile/json/Quotazioni_Fantacalcio_Stagione_2022_23.json";

const Centrocampisti = () => {
  const [midfielders, setMidfielders] = useState([
    ...teamsPlayers[0].Centrocampisti,
  ]);
  const [activePlayer, setActivePlayer] = useState({});
  useEffect(() => {
    console.log(activePlayer);
  }, [activePlayer]);

  function selectRandomMidfielder(event) {
    if (midfielders.length > 0) {
      const inputName = event.target.name;
      const randomIndex = Math.floor(Math.random() * midfielders.length);
      const randomPlayer = midfielders[randomIndex];
      setActivePlayer(randomPlayer);
      const values = [...midfielders];
      console.log(values);
      const deletedPlayer = values.splice(randomIndex, 1);
      console.log(values);
      setMidfielders(values);
    } else if (midfielders.length === 0) {
      console.log("i centrocampisti sono finiti");
    }
  }
  return (
    <div>
      <h2>Centrocampisti</h2>
      <button
        type="button"
        name="randomDefender"
        id="randomDefender"
        onClick={(event) => {
          selectRandomMidfielder(event);
        }}
      >
        Estrai un centrocampista casuale
      </button>{" "}
      <hr />
      {activePlayer !== undefined && midfielders.length !== 0 && (
        <div>
          <h3>{activePlayer.Column4}</h3>
          <p>
            {activePlayer.Column2} - {activePlayer.Column5}
          </p>
          <p>quotazione: {activePlayer.Column6}</p>
        </div>
      )}
      {midfielders.length === 0 && activePlayer === undefined && (
        <>
          <h1>I centrocampisti sono finiti</h1>
        </>
      )}
    </div>
  );
};

export default Centrocampisti;
