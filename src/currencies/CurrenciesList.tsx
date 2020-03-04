import * as React from "react";
import Currency from "./Currency";

interface IProps {
    currencies: Array<Currency>
}



const CurrenciesList: React.FC<IProps> = (props) => {
    return <>
        {props.currencies.map((currency: Currency) =>
            <div key={currency.name}>

            </div>
        )}
    </>
};

export default CurrenciesList;
