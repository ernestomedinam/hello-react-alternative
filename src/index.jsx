import React from 'react';
import { createRoot } from 'react-dom/client';
import { Layout } from './Layout';
import { MainContextProvider } from './contexts/MainContext/MainContext';
import './index.css';

const rootContainer = document.querySelector("#root");
if (!rootContainer) throw new Error("no div with id root 😥");
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <MainContextProvider>
            <Layout />
        </MainContextProvider>
    </React.StrictMode>
);
