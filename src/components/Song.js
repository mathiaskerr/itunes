import React from "react";

const Song =({title, index, artist, preview}) => {
  return(
    <div>
   
    <li key={index}>Title: {title} ---- {artist}</li>
    <audio controls>
        <source src={preview} type="audio/ogg"></source>
    </audio>
    </div>
  )
}
export default Song;