import React, { useEffect, useState } from "react";
import "./Home.css";
import { useActions, useStore } from "../../contexts/MainContext/mainContextHooks";
import rigoBaby from "../../assets/rigo-baby.jpg";

export const Home = (props) => {
    const { songs } = useStore();
    const { getSongs } = useActions();
    const [playingSong, setPlayingSong] = useState();
    useEffect(() => {
        if (!songs) return;
        const randomIndex = Math.floor(Math.random() * songs.length); 
        setPlayingSong(songs[randomIndex]);
    }, [songs]);
    return (
        <div className="container">
            <div className="row">
                <div className="text-center mt-5">
                    <h1>Hello Rigo!!</h1>
                    <p>
                        <img src={rigoBaby} />
                    </p>
                </div>
            </div>
            <div className="row">
                {!songs && (
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={getSongs}>{"load songs"}</button>
                )}
                {songs && (
                    <React.Fragment>
                        <audio
                            controls 
                            autoPlay
                            src={playingSong?.url || ""}></audio>
                        <ul>
                            {songs.map((song) => (
                                <li 
                                    key={song.id}
                                    onClick={(event) => setPlayingSong(
                                        songs.find(_song => song.id === _song.id)
                                    )}>
                                    {song.name}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
