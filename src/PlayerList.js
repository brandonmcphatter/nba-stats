import {useEffect} from "react";
import * as PropTypes from "prop-types";

export default function PlayerList({players, setPlayers, query}) {

    useEffect(() => {
        async function getPlayers() {
            const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
            const data = await response.json();
            setPlayers(data.data);
        }
        getPlayers();
    }, [query, setPlayers]);

    if (players && query.length > 2) {
        return (
            <div>
                {players.map(({first_name, last_name, id, team}) => (
                    <div className='playerInfo' key={id}>
                        <h5>
                            {first_name} {last_name}
                        </h5>
                        <h4>
                            {team.full_name}
                        </h4>
                    </div>
                ))}
            </div>
        );
    }
    return null;
}

PlayerList.propTypes = {
    setPlayers: PropTypes.func,
    players: PropTypes.arrayOf(PropTypes.any)
};