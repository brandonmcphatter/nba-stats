import {useEffect} from "react";

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
                <div className='teamInfo' key={id}>
                    <a href={`https://www.nba.com/${name}/`} target='blank'>
                        <h4>
                            {full_name}
                        </h4>
                    </a>
                </div>
            ))}
        </div>
    );
}

