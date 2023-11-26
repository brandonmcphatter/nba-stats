import {useEffect} from "react";
import TeamInfo from "./TeamInfo";

export default function TeamList({teams, setTeams}) {

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
                <TeamInfo key={id} full_name={full_name} id={id} name={name}/>
            ))}
        </div>
    );
}

