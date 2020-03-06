import * as React from 'react';
import {useEffect, useState} from "react";
import CurrenciesList from "./CurrenciesList";
import {Constants} from "../constants";
import Currency from "./Currency";

interface CurrenciesListProps {

}

const CurrenciesListContainer: React.FC<CurrenciesListProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [currencies, setCurrencies] = useState<Array<Currency>>([]);

    useEffect(() => {
        if (!!window.EventSource) {
            var source = new EventSource(Constants.GET_CURRENCIES_URL);
            source.onmessage = e => {
                console.log("On message: "+e.data)
            };
            source.onerror = e => {
                console.log("On error: ");
                console.log(e);
            };
            source.onopen = e => {
                console.log("Openning connection: "+e);
            };

        } else {
            // Result to xhr polling
        }
        return () => source.close();
    });

    return (
        <CurrenciesList
            currencies={currencies}
        />
    )
};

export default CurrenciesListContainer;
