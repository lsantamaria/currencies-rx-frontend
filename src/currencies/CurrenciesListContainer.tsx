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
        fetchData()
            .then(data => console.log("fetched:" + data));
        //
        // if (!!window.EventSource) {
        //     var source = new EventSource(Constants.GET_CURRENCIES_URL);
        //     source.addEventListener('message', function(e) {
        //         console.log(e);
        //         console.log("Event source");
        //         console.log(JSON.parse(e.data));
        //     }, false);
        // }


    });

    const fetchData = async () => {
        console.log("Fetching...");
        const response = await fetch(Constants.GET_CURRENCIES_URL);
        console.log("Response...");
        console.log(response);
        const data = await response.json()
            .then(data2 => console.log(data2));

    };

    return (
        <CurrenciesList
            currencies={currencies}
        />
    )
};

export default CurrenciesListContainer;
