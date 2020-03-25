import * as React from 'react';
import CreateEvent from "./CreateEvent";
import {RootState} from "../redux/root-reducer";
import {createEvent} from "./action-creators";
import {connect, ConnectedProps} from "react-redux";

interface CreateEventProps {
}

const mapStateToProps = (state:RootState) => {
    return {
    }
};

const mapDispatchToProps = {
    createEvent
};

const connector = connect(mapStateToProps, {
    createEvent
});
type Props = ConnectedProps<typeof connector> & CreateEventProps


export default connector(CreateEvent);
