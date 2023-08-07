import './App.css'
import Header from './Header'
import Create from './components/Create.jsx';
import { useState } from "react";
import PlayerList from "./components/PlayerList.jsx";
import SelectedPlayer from "./components/SelectedPlayer.jsx";


export default function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <>
    <div>
      <Header />
      </div>
      <div className="playerlist">
      {selectedPlayerId ? (
              <SelectedPlayer selectedPlayerId={selectedPlayerId}
              setSelectedPlayerId={setSelectedPlayerId} />
      ) : (
        
        <PlayerList setSelectedPlayerId={setSelectedPlayerId} />
        
      )}
      </div>
      <div className="create">
          <Create />
      </div>
    </>
  );
}

 