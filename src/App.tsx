import React from 'react';
import './App.css';
import CurrenciesListContainer from "./currencies/CurrenciesListContainer";
import CurrenciesList from "./currencies/CurrenciesList";

const App: React.FC = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Currencies:
                </div>
              <CurrenciesListContainer />
            </header>
        </div>
    );
};

export default App;
