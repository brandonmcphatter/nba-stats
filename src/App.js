import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [players, setPlayers] = useState([]);
    const [query, setQuery] = useState('space jam');
    const key = '45ea8b08';

    function logData() {
        console.log(players);
    }
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/1`)
                const data = await res.json();
                setPlayers(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            } finally {
                console.log('done');
            }
        }

        getData();

    }, [query]);

    return (
        <div className="App">
            <input type="text" value='' name='searchBar'/>
            <button onClick={logData}>Search</button>


        </div>
    );
}


export default App;
