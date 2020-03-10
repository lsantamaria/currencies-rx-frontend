import * as React from "react";
import {Currency} from "./types";
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
        },
        table: {
            // maxWidth: 650,
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
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Symbol</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {currencies.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.symbol}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
);

export default CurrenciesList;
