import { useId } from "react";
import React from 'react'


function InputBox({
    label,
    amount,
    onChangeAmount,
    currencyOptions = [],
    selectCurrency = "usd",
    onChangeCurrency,
    disableAmount = false,
    disableCurrency = false,
    className = "",
}) {
    const AmountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={AmountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={AmountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                    disabled={disableAmount}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

