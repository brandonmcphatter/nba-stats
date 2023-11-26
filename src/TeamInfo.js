export default function TeamInfo({full_name, id, name}) {
    return (
        <div className='teamInfo' key={id}>
            <a href={`https://www.nba.com/${name}/`} target='blank'>
                <h4>
                    {full_name}
                </h4>
            </a>
        </div>
    );
}