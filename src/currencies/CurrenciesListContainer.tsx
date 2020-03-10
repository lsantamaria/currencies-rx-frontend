import * as React from 'react';
import {useEffect, useState} from "react";
import CurrenciesList from "./CurrenciesList";
import {RootState} from "../redux/root-reducer";
import {fetchCurrencies} from "../redux/currencies/action-creators";
import {connect, ConnectedProps} from "react-redux";
import {Currency} from "./types";

interface CurrenciesListProps {
    currencies: Array<Currency>,
    style?:Object
}

const mapStateToProps = (state:RootState) => {
    return {
        currencies: state.currencyState.currencies
    }
};

const mapDispatchToProps = {
    fetchCurrencies
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector> & CurrenciesListProps


const CurrenciesListContainer: React.FC<Props> = (props:Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        props.fetchCurrencies();
    }, []);

    return (
        <CurrenciesList
            currencies={props.currencies}
            style={props.style}
        />
    )
};


export default connector(CurrenciesListContainer);
