import * as React from 'react';
import EventsList from "./EventsList";
import {Observable} from "rxjs";
import {CurrencyEvent} from "./types";
import {useState} from "react";

interface EventsListProps {
    events: Observable<CurrencyEvent>,
    style?: Object
}

const EventsListContainer: React.FC<EventsListProps> = (props: EventsListProps) => {
    const [events, setEvents] = useState<Array<CurrencyEvent>>([]);

    props.events.subscribe((next: CurrencyEvent) => {
        if(!events.find(el => el.id === next.id)){
            setEvents([...events, next]);
        }
    });

    return (
        <EventsList
            events={events}
            style={props.style}
        />
    )
};

export default EventsListContainer;
