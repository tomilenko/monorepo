import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CoreComponent } from '@app/ui-component';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>

            <h1>{CoreComponent.name}</h1>
            <h1>{CoreComponent.id}</h1>
        </div>
    );
}

export default App;
