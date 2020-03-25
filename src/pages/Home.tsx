import React, {useEffect} from 'react';
import CurrenciesListContainer from "../currencies/CurrenciesListContainer";
import {Constants} from "../common/constants";
import {InputLabel} from "@material-ui/core";
import EventsListContainer from "../events/EventsListContainer";
import {Subject} from "rxjs";
import {CurrencyEvent} from "../events/types";

const Home: React.FC = () => {
    const eventsObservable = new Subject<CurrencyEvent>();

    useEffect(() => {
        const source = new EventSource(Constants.GET_EVENTS_STREAM_URL);
        if (!!window.EventSource) {
            source.onmessage = e => {
                const event: CurrencyEvent = JSON.parse(e.data);
                eventsObservable.next(event);
            };
            source.onerror = e => {
                console.log("On error: ");
                console.log(e);
            };
            source.onopen = e => {
                console.log("Opening connection: " + e);
            };

        } else {
            // polling
        }
        return () => source.close();
    });

    return (
        <div className="App">
            <div style={{flex: 1.5, flexWrap:'wrap', marginTop:100, marginLeft:40, maxHeight: 100}}>
                <InputLabel disabled={true} style={{justifyContent: 'center', fontWeight: 'bold'}}>Static
                    list</InputLabel>
                <CurrenciesListContainer style={{marginTop: 10}}/>
            </div>
            <div style={{flex: 1, flexWrap:'wrap', marginTop:100, marginLeft:40, marginRight:40}}>
                <InputLabel disabled={true} style={{justifyContent: 'center', fontWeight: 'bold'}}>Dynamic event
                    list</InputLabel>
                <EventsListContainer style={{marginTop: 10}} events={eventsObservable}/>
            </div>

        </div>
    );
};

export default Home;
