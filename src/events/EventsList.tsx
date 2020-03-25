import * as React from "react";
import {CurrencyEvent} from "./types";
import {
    WithStyles, Theme, createStyles, withStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

const styles = (theme: Theme) =>
    createStyles({
        container:{
            display:'flex',
            justifyContent: 'space-between',
            flex: 1,
        }
    });

interface EventListProps extends WithStyles<typeof styles> {
    events: Array<CurrencyEvent>,
    style?:Object
}

const EventList = withStyles(styles)
(({events, classes, style}: EventListProps) => (
    <TableContainer component={Paper} className={classes.container} style={style}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="right">Info</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {events && events.map(row => (
                    <TableRow key={row.id}>
                        <TableCell align="left">{row.type}</TableCell>
                        <TableCell align="right">{row.info}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
);

export default EventList;
