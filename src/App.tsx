import React from 'react';
import './App.css';
import CurrenciesListContainer from "./currencies/CurrenciesListContainer";
import ProfileList from "./currencies/ProfileList";

const App: React.FC = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Currencies:
                </div>
              <ProfileList />
            </header>
        </div>
    );
};

export default App;
