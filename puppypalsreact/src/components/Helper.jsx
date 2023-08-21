// Delete Player
export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/' + playerId, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(
            `Error removing player #${playerId}!`,
            err
        );
    }
};