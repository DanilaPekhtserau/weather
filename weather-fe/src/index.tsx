import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import SignUpForm from "./Components/Molecules/Authorization/SignUpForm";
import LogInForm from "./Components/Molecules/Authorization/LogInForm";
import WeatherView from "./Components/Molecules/WeatherView";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/log-in",
        element: <LogInForm/>,
    },
    {
        path: "/sign-up",
        element: <SignUpForm/>,
    },
    {
        path: "/weather",
        element: <WeatherView/>
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

