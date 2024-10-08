import React, { useEffect, useRef, useState } from "react";
import { useBarn, useBarnActions } from "../../contexts/BarnContext/barnContextHooks";
import { Chicken } from "../../components/Chicken/Chicken";
import { AddLivestock } from "../../components/AddLivestock/AddLivestock";

export const Barn = (props) => {
    const [addLivestock, setAddLivestock] = useState({
        show: false,
        nature: undefined
    });
    const barn = useBarn();
    const {getChickens} = useBarnActions();
    const mounted = useRef(false);
    useEffect(() => {
        if (barn.chickens) return; 
        if (mounted.current) return;
        mounted.current = true;
        getChickens();
    }, [barn.chickens, getChickens]);
    return (
        <div className="container">
            <div className="row justify-content-center my-4">
                <h1 className="display-1 w-100 text-center">{"Barn animals"}</h1>
            </div>
            <div className="row">
                <div className="d-flex flex-column w-100">
                    <div className="d-flex justify-content-between">
                        <h2 className="display-2">{"Chickens"}</h2>
                        <button 
                            onClick={(event) => setAddLivestock({
                                show: true,
                                nature: "chicken"
                            })}
                            className="my-auto btn btn-success">
                            {"Buy chicken"}
                        </button>
                    </div>
                    <div
                        aria-label="chickens container" 
                        className="d-flex w-100 flex-nowrap overflow-scroll">
                        {barn.chickens?.map(
                            (chicken) => (
                                <Chicken 
                                    key={chicken.id} 
                                    chicken={chicken} />
                        ))}
                    </div>
                </div>
            </div>
            <AddLivestock payload={addLivestock} close={() => setAddLivestock({
                show: false,
                nature: undefined
            })} />
        </div>
    );
};
