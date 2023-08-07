import { useState, useEffect } from 'react';

const SelectedPlayer = ({ selectedPlayerId, setSelectedPlayerId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/${selectedPlayerId}`
        );
        const playerData = await response.json();
        setPlayer(playerData.data.player);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayer();}, [selectedPlayerId]);

    console.log("Player: ", player)
    
    return (
    <div id="single">
      {player ? (
        <>
 
        <br/>   
        <div className="deetImg">
          <img id="detail-image" src={player.imageUrl}/>
          </div>

        <div className="deets">
        <h2>Player Details</h2>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>ID: {player.id}</p>
          </div>

      
          <br/><br/>
        </>
      ) : (
        <p>Loading contact...</p>
      )}
<div className="button">
      <button onClick={() => setSelectedPlayerId(null)}>Return</button>
      </div>
    </div>

    
  );
};

export default SelectedPlayer;