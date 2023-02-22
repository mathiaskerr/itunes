import React from "react";
import Song from "./Song";

const SongList =({songs}) => {

    const songItems = songs.map((songs, index) => {
    return <Song key={index} title={songs['im:name'].label} artist={songs['im:artist'].label} preview={songs.link[1].attributes.href} />
});
  return(
    <div>
    <h1>Song list</h1>
    <ol>
    {songItems}
    </ol>
    </div>
  )
}
export default SongList;