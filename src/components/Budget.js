import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, remaining, dispatch, currency } =
        useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value);
        if (value > 20000) value = 20000;
        setInputValue(value < remaining ? remaining : value);

        dispatch({
            type: "SET_BUDGET",
            payload: inputValue,
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
