import './App.css';
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";


export default function App() {
    const [query, setQuery] = useState('Lebron');
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);



    console.log(players);

    return (
        <div className="App">
            <h1>The NBA App</h1>
            <input type="text" value={query} name='searchBar' onChange={(e) => setQuery(e.target.value)}/>
            <button type='submit'>Search</button>
            <PlayerList players={players} setPlayers={setPlayers} query={query}/>
            <TeamList teams={teams} setTeams={setTeams}/>
        </div>
    );
}

function TeamList({teams, setTeams}) {

    useEffect(() => {
        async function getTeams() {
            const response = await fetch(`https://www.balldontlie.io/api/v1/teams`);
            const data = await response.json();
            setTeams(data.data);
        }

        getTeams();
    }, [setTeams]);

    return (
        <div>
            {teams.map(({full_name, id, name}) => (
                <div className='teamInfo' key={id}>
                    <a href={`https://www.nba.com/${name}/`}>

                        <h4>
                            {full_name}
                        </h4>
                    </a>
                </div>
            ))}
        </div>
    );
}

function PlayerList({players, setPlayers, query}) {
    useEffect(() => {
        async function getPlayers() {
            const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
            const data = await response.json();
            setPlayers(data.data);
        }

        getPlayers();
    }, [query, setPlayers]);

    if (players) {
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
