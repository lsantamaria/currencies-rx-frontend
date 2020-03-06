import React, {useEffect} from 'react';
import './App.css';
import CurrenciesListContainer from "./currencies/CurrenciesListContainer";
import store from "./redux/store";
import {Provider} from "react-redux";
import {Constants} from "./constants";

const App: React.FC = (props) => {

    useEffect(() => {
        if (!!window.EventSource) {
            var source = new EventSource(Constants.GET_CURRENCIES_URL);
            source.onmessage = e => {
                console.log("On message: "+e.data)
            };
            source.onerror = e => {
                console.log("On error: ");
                console.log(e);
            };
            source.onopen = e => {
                console.log("Openning connection: "+e);
            };

        } else {
            // Result to xhr polling
        }
        return () => source.close();
    });

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <div>
                        Currencies:
                    </div>
                    <CurrenciesListContainer/>
                </header>
            </div>
        </Provider>
    );
};

export default App;
