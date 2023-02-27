import React, { useState, useEffect } from "react";

import "./numberStepperStyles.css";

export interface NumberStepperProps {
  /** Whether the entire component is disabled */
  disabled?: boolean;
  /** First number in the input */
  initialValue: number;
  /** Biggest possible option */
  max: number;
  /** Smallest possible option */
  min: number;
  /** Denotes the field as required */
  required?: boolean;
  /** Additional props */
  [x: string]: any;
}

export const NumberStepper = ({
  disabled: disabledInput = false,
  initialValue = 0,
  max = 100,
  min = 0,
  required = false,
}: NumberStepperProps) => {
  const [value, setValue] = useState(initialValue);
  const [decreaseDisabled, setDecreaseDisabled] = useState(
    initialValue === min || initialValue < min
  );
  const [increaseDisabled, setIncreaseDisabled] = useState(
    initialValue === max || initialValue > max
  );
  const [error, setError] = useState("");

  useEffect(() => {
    value > min ? setDecreaseDisabled(false) : setDecreaseDisabled(true);
    value < max ? setIncreaseDisabled(false) : setIncreaseDisabled(true);
    value > min && value < max && !!value && setError("");
    value < min && setError(`Minimum allowed value is ${min}`);
    value > max && setError(`Maximum allowed value is ${max}`);
    value === null && required && setError("Field is required");
  }, [value]);

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  const decreaseNum = () => {
    (!!value || value === 0) && value > min
      ? setValue(value - 1)
      : setValue(min + 1);
  };

  const increaseNum = () => {
    (!!value || value === 0) && value < max ? setValue(value + 1) : setValue(0);
  };

  return (
    <>
      <label htmlFor="number-input">Number Input</label>
      <div className="rounded border-solid border-purple-500 border-2 w-fit">
        <div className="flex align-center">
          <button
            aria-label="decrease"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300 disabled:bg-purple-300 disabled:hover:bg-purple-300"
            disabled={decreaseDisabled}
            onClick={decreaseNum}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <input
            className="px-1 h-[32px] bg-transparent text-center rounded-none focus:outline-purple-300 focus:outline-offset-[-2px]"
            id="number-input"
            type="number"
            value={value}
            onChange={handleInputChange}
            disabled={disabledInput}
          />
          <button
            aria-label="increase"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300  disabled:bg-purple-300 disabled:hover:bg-purple-300"
            disabled={increaseDisabled}
            onClick={increaseNum}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-red-700 text-sm">{error}</p>
    </>
  );
};
