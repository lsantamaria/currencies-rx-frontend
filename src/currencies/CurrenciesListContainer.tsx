import * as React from 'react';
import {useState} from "react";
import CurrenciesList from "./CurrenciesList";
import Currency from "./Currency";
import {RootState} from "../redux/root-reducer";
import {fetchCurrencies} from "../redux/currencies/action-creators";
import {connect} from "react-redux";

interface CurrenciesListProps {

}

const mapStateToProps = (state:RootState) => {
    return {
        currencies: state.currencyState.currencies
    }
};

const mapDispatchToProps = {
    fetchCurrencies
};

const CurrenciesListContainer: React.FC<CurrenciesListProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [currencies, setCurrencies] = useState<Array<Currency>>([]);

    return (
        <CurrenciesList
            currencies={currencies}
        />
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesListContainer);
