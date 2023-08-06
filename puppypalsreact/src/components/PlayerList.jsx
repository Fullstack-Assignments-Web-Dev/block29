// const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players');

import { useState, useEffect } from 'react'
import PlayerRow from './PlayerRow.jsx';

export default function PlayerList({ setSelectedPlayerId }) {


  const [players, setPlayers] = useState([])

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

console.log("Players: ", players)

        return ( 
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Player List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Breed</td>
                  <td>Status</td>
                </tr>
                {players.map((player) => {
          return <PlayerRow key={player.id} player={player} setSelectedPlayerId={setSelectedPlayerId} />;
        })}
              </tbody>
            </table>
            
        ); 
    }

