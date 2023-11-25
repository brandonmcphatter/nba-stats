import './App.css';
import {useState} from "react";
import PlayerList from "./PlayerList";
import TeamList from "./TeamList";


export default function App() {
    const [query, setQuery] = useState('Lebron');
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);

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