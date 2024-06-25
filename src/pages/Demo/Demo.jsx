import React from "react";
import { useActions, useStore } from "../../contexts/MainContext/mainContextHooks";
import { Link } from "react-router-dom";

export const Demo = (props) => {
    const { demoItems } = useStore();
    const { toggleColor } = useActions();
    return (
        <div className="container pt-5">
            <div className="row">
                <ul className="list-group">
                    {/* Map over the 'demo' array from the store and render each item as a list element */}
                    {demoItems.map((item, index) => {
                        return (
                            <li
                                // React key for list items; could also use index if there 
                                // is no id or unique value for each object
                                key={item.id}  
                                aria-label="demo item"
                                className="list-group-item d-flex justify-content-between"
                                style={{ background: item.background }}>
                                <Link to={"/single/" + item.id}>
                                    <span>Link to: {item.title}</span> {/* Link to the detail page of this item. */}
                                </Link>
                                {/* Conditional rendering to show a message if the background is orange */}
                                {item.background === "orange" ? (
                                    <p style={{ color: item.initial }}>
                                        Open file ./store.js to see the global store that contains and updates the list of colors
                                    </p>
                                ) : null}
                                {/* We use the dispatch function to send the new color to the global store reducer */}
                                <button 
                                    className="btn btn-success" 
                                    onClick={(event) => toggleColor(index)}>
                                    Toggle color
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="row py-4 justify-content-center">
                <Link 
                    to="/"
                    className="btn btn-primary w-auto">
                    {"Back home"}
                </Link>
            </div>
        </div>
    );
};
