import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Currency() {
    const { currencys, dispatch, currency } = useContext(AppContext);

    const handleInputChange = (e) => {
        if (e !== " ") {
            dispatch({
                type: "CHG_CURRENCY",
                payload: e,
            });
        }
    };

    return (
        <div className="alert alert-secondary">
            <label className=" bg-success text-white rounded">
                <span className="m-3">Currency</span>
                <select
                    className="btn btn-success dropdown-toggle rounded"
                    onChange={(event) =>
                        handleInputChange(event.target.value)
                    }
                    id="currency"
                    defaultValue={currency}
                >
                    {currencys.map((currencyMap) => {
                        return (
                            <option
                                key={currencyMap.id}
                                value={currencyMap.symbol}
                            >
                                {currencyMap.symbol}{" "}
                                {currencyMap.name}
                            </option>
                        );
                    })}
                </select>
            </label>
        </div>
    );
}

export default Currency;
