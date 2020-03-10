import React, {useEffect} from 'react';
import './App.css';
import CurrenciesListContainer from "./currencies/CurrenciesListContainer";
import {Constants} from "./constants";
import {ReactiveList} from "@appbaseio/reactivesearch";
import {createStyles, InputLabel, StepLabel, TextField, Theme} from "@material-ui/core";


const App: React.FC = (props) => {
    // useEffect(() => {
    //     if (!!window.EventSource) {
    //         var source = new EventSource(Constants.GET_CURRENCIES_STREAM_URL);
    //         source.onmessage = e => {
    //             console.log("On message: "+e.data)
    //         };
    //         source.onerror = e => {
    //             console.log("On error: ");
    //             console.log(e);
    //         };
    //         source.onopen = e => {
    //             console.log("Opening connection: "+e);
    //         };
    //
    //     } else {
    //         // Result to xhr polling
    //     }
    //     return () => source.close();
    // });

    return (
        <div className="App">
            <div style={{flex: 1, margin: 40}}>
                <InputLabel disabled={true} style={{justifyContent: 'center', fontWeight: 'bold'}}>Static
                    list</InputLabel>
                <CurrenciesListContainer style={{marginTop: 10}}/>
            </div>
            <div style={{flex: 1, margin: 40}}>
                <InputLabel disabled={true} style={{justifyContent: 'center', fontWeight: 'bold'}}>Dynamic event
                    list</InputLabel>
                <CurrenciesListContainer style={{marginTop: 10}}/>
            </div>

        </div>
    );
};

export default App;
