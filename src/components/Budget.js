import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, remaining } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(budget);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if(value > 20000) value = 20000;
        setInputValue(value < remaining ? remaining : value);
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: </span>
            <input
                type="number"
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                step="10.0"
            ></input>
        </div>
    );
};
export default Budget;
