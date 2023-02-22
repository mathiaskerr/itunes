import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const ChartContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    },[])

    const getSongs = function(){
        const request = fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))

        
    };

    return(
        <div>
        <h2>Chart Container</h2>
        <SongList songs={songs}/>
        </div>
    )
};

export default ChartContainer;





