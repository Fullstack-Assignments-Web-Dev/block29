export default function PlayerRow({ setSelectedPlayerId, player }) {
  return (
    <tr onClick={() => {
      setSelectedPlayerId(player.id);
    }}>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.status}</td>
    </tr>
  );
}