import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SelectedPlayer = ({ selectedPlayerId, setSelectedPlayerId }) => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

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

    const handleDelete = async () => {
      try {
        await deletePlayer(id);
        navigate('/'); // Redirect back to AllPlayers after deletion
      } catch (error) {
        console.error('Error deleting player:', error);
      }
    };
  
    if (!player) {
      return <div>Loading...</div>;
    }

    const deletePlayer = async (selectedPlayerId) => {
      try {
          const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/' + selectedPlayerId, {
              method: 'DELETE',
          });
          if (!response.ok) {
              throw new Error ('Failed to remove player #${selectedPlayerId}');
          }
          const data = await response.json();
          return data;
      } catch (err) {
          console.error(
              `Whoops, trouble removing player #${selectedPlayerId} from the roster!`,
              err
          );
      }
  };




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
          <button onClick={handleDelete}>Delete Player</button>
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