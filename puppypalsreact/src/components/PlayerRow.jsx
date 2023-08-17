export default function PlayerRow({ setSelectedPlayerId, player }) {
  
  const deleteUser = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setUsers(values => {
          return values.filter(item => item.id !== id)
        })
        AppToaster.show({
          message: "User deleted successfully",
          intent: "success",
          timeout: 3000,
        })
      })
  }
  
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