import React from 'react';
import './App.css';
import SignUpForm from "./Components/Molecules/Authorization/SignUpForm";
import LogInForm from "./Components/Molecules/Authorization/LogInForm";

function App() {
    return (
        <div className="App">
            <SignUpForm/>
            -------------
            <LogInForm/>
        </div>
    );
}

export default App;
