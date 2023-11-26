export default function Header({query, setQuery}) {
    return (
        <header className='header'>
            <h1>The NBA App</h1>
            <div>
                <input type="text" value={query} name='searchBar' onChange={(e) => setQuery(e.target.value)}/>
                <button type='submit'>Search</button>
            </div>
        </header>
    );
}