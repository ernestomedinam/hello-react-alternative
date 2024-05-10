import React from "react";

export const Footer = (props) => {
    return (
        <footer className="d-flex mt-auto py-4 text-center text-light bg-dark flex-column align-items-center">
            <p>
                <a 
                    className="text-light"
                    rel="noreferrer"
                    target="_blank" 
                    href="https://4geeks.com/docs/start/start-react-advanced-project">
                    {"📁 Check this template docs!"}
                </a>
            </p>
            <p>
                {"Made with ❤ by "}
                <a 
                    className="text-light"
                    rel="noreferrer"
                    target="_blank"
                    href="http://www.4geeksacademy.com">
                    {"4Geeks Academy"}
                </a>
            </p>
        </footer>
    )
};