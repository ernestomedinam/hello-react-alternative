import React, { useEffect, useState } from "react";
import { useActions, useStore } from "../../contexts/MainContext/mainContextHooks";
import rigoBaby from "../../assets/rigo-baby.jpg";
import "./Home.css";

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
        <div className="container d-flex flex-column align-items-center">
            <div className="row">
                <div className="text-center mt-5">
                    <h1 className="display-1 mb-4">{"Hello Rigo!!"}</h1>
                    <p>
                        <img src={rigoBaby} />
                    </p>
                </div>
            </div>
            <div className="row w-100">
                {!songs && (
                    <button
                        type="button"
                        className="btn btn-success w-auto mx-auto my-3"
                        onClick={(event) => getSongs()}>{"Load Rigo's songs hosted @4Geeks"}</button>
                )}
                {songs && (
                    <React.Fragment>
                        <audio
                            controls 
                            autoPlay
                            src={playingSong?.url || ""}></audio>
                        <ul className="list-group w-100 my-4 mb-5">
                            {songs.map((song) => (
                                <li 
                                    key={song.id}
                                    className={`list-group-item clickable ${playingSong?.id === song.id 
                                        ? "active"
                                        : "" }`}
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
