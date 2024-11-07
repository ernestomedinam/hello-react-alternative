import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBarn } from "../../contexts/BarnContext/barnContextHooks";
import { Chicken } from "../../components/Chicken/Chicken";

export const Livestock = (props) => {
    const barn = useBarn();
    const navigate = useNavigate();
    const {nature, id} = useParams();
    const livestock = useMemo(() => {
        if (!barn || !barn[nature]) return;
        const _livestock = barn[nature]
            .find((animal) => animal.id == id);
        return _livestock;
    }, [barn, nature, id]);
    useEffect(() => {
        if (!livestock) navigate("/barn");
    }, [livestock, navigate]);
    return (
        <div className="container">
            {livestock && (
                <React.Fragment>
                    <div className="row">
                        <h1 
                            aria-label={`${nature === "chickens"
                                ? "chicken"
                                : "livestock"
                            } name: ${livestock.name}`}
                            className="display-2 w-100 text-center fw-bold mt-5">
                            {`${livestock.name} the chicken`}
                        </h1>
                    </div>
                    <div className="d-flex w-100 justify-content-center">
                        {nature === "chickens" && <Chicken chicken={livestock} />}
                    </div>
                    <div className="d-flex flex-column">
                        <div className="row w-100 justify-content-center">
                            <p className="col-3 fs-4">{"color:"}</p>
                            <p className="col-6 fs-4 fw-bold">{
                                `${livestock.color[0]} (${livestock.color[1]})`
                            }</p>
                        </div>
                        <div className="row w-100 justify-content-center">
                            <p className="col-3 fs-4">{"1st trait:"}</p>
                            <p className="col-6 fs-4 fw-bold">{
                                `${livestock.color[0]} (${livestock.color[1]})`
                            }</p>
                        </div>
                        <div className="row w-100 justify-content-center">
                            <p className="col-3 fs-4">{"2nd trait:"}</p>
                            <p className="col-6 fs-4 fw-bold">{
                                `${livestock.color[0]} (${livestock.color[1]})`
                            }</p>
                        </div>
                        <div className="row w-100 justify-content-center">
                            <p className="col-3 fs-4">{"3rd trait:"}</p>
                            <p className="col-6 fs-4 fw-bold">{
                                `${livestock.color[0]} (${livestock.color[1]})`
                            }</p>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
