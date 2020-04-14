import * as React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import {useState} from "react";
import {CurrencyEvent} from "./types";
import Button from "@material-ui/core/Button";

interface CreateEventProps {
    createEvent(event: CurrencyEvent): void;
}

const CreateEvent: React.FC<CreateEventProps> = (props: CreateEventProps) => {

    const [eventType, setEventType] = useState("");
    const [eventInfo, setEventInfo] = useState("");

    const onSubmit = () => props.createEvent({type: eventType, info: eventInfo});
    const onChangeText = (event:React.ChangeEvent<HTMLInputElement>) => setEventInfo(event.target.value);
    const onChangeType = (event:React.ChangeEvent<HTMLInputElement>) => setEventType(event.target.value);

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Event type</FormLabel>
                <RadioGroup aria-label="type" name="type1" value={eventType} onChange={onChangeType}>
                    <FormControlLabel value="HIGH_PRICE" control={<Radio />} label="High" />
                    <FormControlLabel value="LOW_PRICE" control={<Radio />} label="Low" />
                    <FormControlLabel value="SUSPENDED" control={<Radio />} label="Suspended" />
                </RadioGroup>
            </FormControl>

            <TextField
                id="standard-name"
                label="Event info"
                value={eventInfo}
                style={{color: 'white', height: 48, padding: '0'}}
                onChange={onChangeText}
                margin="normal"
            />
            <Button color="primary" variant="contained" style={{margin: 20}} onClick={onSubmit}>
                Create event!
            </Button>
        </div>
    )
};

export default CreateEvent;
