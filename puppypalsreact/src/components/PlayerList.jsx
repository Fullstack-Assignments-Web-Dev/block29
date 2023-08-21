import { useState, useEffect } from 'react'
import PlayerRow from './PlayerRow.jsx';


export default function PlayerList({ setSelectedPlayerId }) {
  const [players, setPlayers] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(()=>{
    async function fetchPlayers() {
        try {
          const response = await fetch(
            'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/');
          const result = await response.json();
          setPlayers(result.data.players);
        } catch (error) {
          console.error(error);
        }
      }
      fetchPlayers();
    }, []);

    useEffect(() => {
      const filtered = players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlayers(filtered);
    }, [searchQuery, players]);

// console.log("Players: ", players)

        return ( 

          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan="4"><h2>Player List</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>

                <input
        type="text"
        placeholder="Search players..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

                </td>
                  <td>Name</td>
                  <td>Breed</td>
                  <td>Status</td>
                </tr>
                {filteredPlayers.map((player) => {
          return <PlayerRow key={player.id} player={player} setSelectedPlayerId={setSelectedPlayerId} />;
        })}
              </tbody>
            </table>
            </div> 
        ); 
    }

