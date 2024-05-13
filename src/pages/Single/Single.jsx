import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../contexts/MainContext/mainContextHooks";
import rigoBaby from "../../assets/rigo-baby.jpg";

export const Single = (props) => {
    const {demoItems} = useStore();
    const params = useParams();
    // or const {demoItemId} = useParams();
    const demoItem = demoItems.find(
        (item) => item.id == params?.demoItemId
    );
    return (
        <div className="container text-center">
            {/* Display the title of the demo element dynamically retrieved from the store using theId. */}
            <h1 className="display-4 my-4">
                {"This will show the demo element: "}
                {demoItem?.title}
            </h1>
            {/* Display an image. */}
            <img src={rigoBaby} alt="Rigo Baby" />
            <hr className="my-4" />  {/* A horizontal rule for visual separation. */}
            {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
            <Link className="btn btn-primary btn-lg" to="/" role="button">
                {"Back"} 
            </Link>
        </div>
    );
};
