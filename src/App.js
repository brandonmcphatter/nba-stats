import './App.css';
import  {useState} from "react";
import Header from "./Header";
import PlayerList from "./PlayerList";
import TeamList from "./TeamList";


export default function App() {
    const [query, setQuery] = useState('');
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);


    return (
        <div className="App">
            <Header query={query} setQuery={setQuery} players={players}/>
            <Display>
                <TeamBox>
                    <TeamList teams={teams} setTeams={setTeams}/>
                </TeamBox>
                <PlayerBox>
                    <PlayerList players={players} setPlayers={setPlayers} query={query}/>
                </PlayerBox>
            </Display>
        </div>
    );
}

function Display({children}) {
    return (
        <div className='display'>
            {children}
        </div>
    )
}

function TeamBox({children}) {
    return (
        <div>
            <h1>Teams</h1>
            <div className='teamBox'>
                {children}
            </div>
        </div>
    )
}

function PlayerBox({children}) {
    return (
        <div>
            <h1>Players</h1>
            <div className='playerBox'>
                {children}
            </div>
        </div>

    )
}