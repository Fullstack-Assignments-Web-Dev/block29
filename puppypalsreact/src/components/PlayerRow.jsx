export default function PlayerRow({ setSelectedPlayerId, player }) {
  return (
    <tr onClick={() => {
      setSelectedPlayerId(player.id);
    }}>
      <td><img className="thumbnail" src={player.imageUrl} alt={player.name} /></td>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.status}</td>
    </tr>
  );
}