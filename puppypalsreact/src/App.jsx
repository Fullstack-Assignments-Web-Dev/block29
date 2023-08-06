import './App.css'
import Header from './Header'

import { useState } from "react";
import PlayerList from "./components/PlayerList.jsx";
import SelectedPlayer from "./components/SelectedPlayer.jsx";


export default function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <>
      <Header />

      {selectedPlayerId ? (
              <SelectedPlayer selectedPlayerId={selectedPlayerId}
              setSelectedPlayerId={setSelectedPlayerId} />
      ) : (
        <div className="playerlist">
        <PlayerList setSelectedPlayerId={setSelectedPlayerId} />
        </div>
      )}
      
    </>
  );
}

 