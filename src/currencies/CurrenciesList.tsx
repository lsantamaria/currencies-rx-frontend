import * as React from "react";
import {Currency} from "./types";
import {
    WithStyles,
    Theme,
    createStyles,
    withStyles,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

const styles = (theme: Theme) =>
    createStyles({
        container:{
            display:'flex',
            justifyContent: 'space-between',
            flex: 1,
            maxHeight: 500
        },
        table: {
        },
    });

interface CurrencyListProps extends WithStyles<typeof styles> {
    currencies: Array<Currency>,
    style?:Object
}

const CurrenciesList = withStyles(styles)
(({currencies, classes, style}: CurrencyListProps) => (
    <TableContainer component={Paper} className={classes.container} style={style}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Icon</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="right">Symbol</TableCell>
                    <TableCell align="right">Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {currencies && currencies.map(row => (
                    <TableRow key={row.name}>
                        <TableCell><Avatar alt="Remy Sharp" src={row.iconUrl} /></TableCell>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.symbol}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
);

export default CurrenciesList;
