import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch, currency, expenses } =
        useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);
    const budjectLimit = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value);

        if (value > budjectLimit) {
            let over = value - budjectLimit;
            alert(
                "The value cannot exceed remaining funds " +
                    currency +
                    " " +
                    over
            );
            value = budjectLimit;
        } else if (value < totalExpenses) {
            alert(
                "You cannot reduce the budject value lower than the spending "
            );
            value = totalExpenses;
        }

        setInputValue(value);

        dispatch({
            type: "SET_BUDGET",
            payload: value,
        });
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                className="float-right"
                type="number"
                value={inputValue}
                onBlur={handleInputChange}
                onChange={(e) => setInputValue(e.target.value)}
                step="10.0"
            ></input>
        </div>
    );
};
export default Budget;
