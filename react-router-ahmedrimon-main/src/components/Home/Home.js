import React, { useEffect, useState } from 'react';
import './Home.css';
import League from '../League/League'

const Home = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLeagues(data.countrys)
            })
    }, [])
    return (
        <div>
            <h3>Leagues detail: {leagues.length}</h3>
            {
                leagues.map(league => <League league={league}></League>)
            }

        </div>
    );
};

export default Home;