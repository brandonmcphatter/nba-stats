import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [query, setQuery] = useState('');
    const [teams, setTeams] = useState([]);



    function handleSubmit() {
        console.log(teams[0])
    }

    return (
        <div className="App">
            <h1>The NBA App</h1>
            <input type="text" value={query} name='searchBar' onChange={(e)=> setQuery(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}>Search</button>

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
        <div className='teamInfo'>
            {teams.map(({full_name, id, name}) => (
                <div key={id}>
                    <h4>
                        <a href={`https://www.nba.com/${name}/`}>
                            {full_name}
                        </a>
                    </h4>
                </div>
            ))}
        </div>
    );
}


export default App;
