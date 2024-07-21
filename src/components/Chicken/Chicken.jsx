import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Chicken.css";
import { Tooltip } from "../Tooltip/Tooltip";

export const Chicken = ({chicken}) => {
    const intro = useMemo(() => {
        return `This is the story of a ${
            chicken.traits[0].trait
        }, ${
            chicken.traits[1].trait
        }, ${
            chicken.traits[2].trait
        } ${
            chicken.color[0]
        } chicken named ${
            chicken.name
        }... it all starts on a ${
            new Date().toLocaleDateString("en-US", {
                weekday: "long"
            })
        } night, while standing in front of the road...`;
    }, [chicken]);
    return (
        <Tooltip
            aria-label={`${chicken.name}'s intro story`}
            text={intro}
            placement={"top"}>
            <div
                aria-label={`${chicken.name} the chicken`}
                className="chicken">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 135.46666 135.46667"
                    height="100%"
                    width="100%">
                    <path
                        aria-label={`${chicken.name} the chicken's face`}
                        className="chicken-face"
                        fill={chicken.color[1]}
                        d={paths["chicken-face"]} />
                    <ellipse
                        aria-label={`${chicken.name} the chicken's eye (left)`}
                        className="chicken-eye"
                        rx="4.15" ry="4.15"
                        cx="38.551617" cy="85.372795" />
                    <ellipse
                        aria-label={`${chicken.name} the chicken's eye (right)`}
                        className="chicken-eye"
                        rx="4.15" ry="4.15"
                        cx="96.293846" cy="85.372795" />
                    <path
                        aria-label={`${chicken.name} the chicken's beak`}
                        className="chicken-beak"
                        d={paths["chicken-beak"]} />
                    <path
                        aria-label={`${chicken.name} the chicken's comb`}
                        className="chicken-comb"
                        d={paths["chicken-comb"]} />
                    <ellipse
                        aria-label={`${chicken.name} the chicken's cheek spot (left)`}
                        className="cheek-spot"
                        rx="5.5523458" ry="2.7231178"
                        cx="34.079693" cy="95.000648" />
                    <ellipse
                        aria-label={`${chicken.name} the chicken's cheek spot (right)`}
                        className="cheek-spot"
                        rx="5.5523458" ry="2.7231178"
                        cx="100.67382" cy="95.000648" />
                </svg>
            </div>
        </Tooltip>
    );
};

Chicken.propTypes = {
    chicken: PropTypes.object
};

const paths = {
    "chicken-face": "m 65.857504,33.317261 c -26.292203,0.0317 -39.586132,10.52967 -45.360626,19.1446 -5.774494,8.61492 -10.806661,23.89092 -7.761325,39.15156 3.045336,15.260639 11.641293,30.700349 54.156794,30.700349 42.515493,0 51.763073,-11.72677 55.536583,-28.458189 3.77351,-16.73142 -1.71586,-35.44735 -8.45123,-43.11846 -6.73537,-7.67111 -21.827996,-17.45153 -48.120196,-17.41986 z",
    "chicken-beak": "m 67.162802,88.163951 c -1.525078,0 -19.388969,4.81967 -15.781359,10.69337 3.60761,5.873699 27.901651,5.917069 31.562721,0 3.66107,-5.91707 -14.25628,-10.69337 -15.781362,-10.69337 z",
    "chicken-comb": "m 66.871273,56.447791 c 11.039241,-0.0271 23.185471,-10.50373 27.562381,-17.92775 4.37691,-7.42402 7.857366,-14.23341 -0.36587,-19.025357 -8.22325,-4.791948 -15.85447,10.488337 -15.85447,10.488337 0,0 3.18094,-16.830126 -10.97617,-16.830126 -14.157114,0 -12.439658,15.976426 -12.439658,15.976426 0,0 -7.633959,-14.196097 -15.122724,-9.756597 -7.488766,4.439497 -5.115151,11.451307 -0.853701,19.025367 4.26145,7.57406 17.010967,18.0768 28.050212,18.0497 z"
};