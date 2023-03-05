import React, { useState, useEffect } from "react";

// import inputStyles from "./numberStepperStyles.module.css";

export interface NumberStepperProps {
  /** Whether the entire component is disabled */
  disabled?: boolean;
  /** Optional text below the component */
  hint?: string;
  /** ID for component */
  id: string;
  /** First number in the input */
  initialValue: number;
  /** Describes the input */
  label: React.ReactNode;
  /** Biggest possible option */
  max?: number;
  /** Smallest possible option */
  min?: number;
  /** Optional value setter to set value outside of component */
  onChange?: (num: number) => void;
  /** Value of the component */
  outsideValue?: number;
  /** Setter function that hooks into error state */
  setError?: (error: string) => void;
  /** Additional props */
  [x: string]: any;
}

export const NumberStepper = ({
  className,
  disabled: disabledInput = false,
  hint,
  id,
  initialValue = 0,
  label,
  max = 100,
  min = 0,
  onChange,
  outsideValue,
  setError: setErrorExternal,
  ...rest
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
    setErrorExternal?.(error);
  }, [error]);

  useEffect(() => {
    value > min ? setDecreaseDisabled(false) : setDecreaseDisabled(true);
    value < max ? setIncreaseDisabled(false) : setIncreaseDisabled(true);
    value >= min && value <= max && !!value && setError("");
    value < min && setError(`Minimum allowed value is ${min}`);
    value > max && setError(`Maximum allowed value is ${max}`);

    onChange?.(value);
  }, [value, setError, max, min]);

  const handleInputChange = (event: any) => {
    const numVal = Number(event.target.value);

    if (Number.isInteger(numVal)) {
      setValue(numVal);
      onChange?.(numVal);
    } else {
      const wholeNum = numVal.toString().split(".");
      setValue(Number(wholeNum[0]));
    }
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
    <div className={className}>
      <label
        className="text-text-100 font-semibold"
        id={`${id}-label`}
        htmlFor={`number-stepper-${id}`}
      >
        {label}
      </label>
      <div
        className={`rounded border-solid border-2 w-fit mt-1 ${
          !!error
            ? "border-red-500"
            : disabledInput
            ? "bg-ghost-900"
            : "border-purple-500"
        }`}
      >
        <div className="flex align-center">
          <button
            aria-label="decrease"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300 disabled:bg-ghost-600 disabled:hover:bg-ghost-600 rounded-tl-[1px] rounded-bl-[1px]"
            id={`${id}-decrease-button`}
            disabled={decreaseDisabled || disabledInput}
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
            className={` px-1 h-[32px] bg-transparent text-center rounded-none focus:outline-purple-300 focus:outline-offset-[-2px]`}
            disabled={disabledInput}
            id={`number-stepper-${id}`}
            onChange={handleInputChange}
            step={1}
            type="number"
            value={outsideValue ?? value}
          />
          <button
            aria-label="increase"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300 disabled:bg-ghost-600 disabled:hover:bg-ghost-600 rounded-tr-[1px] rounded-br-[1px]"
            id={`${id}-increase-button`}
            disabled={increaseDisabled || disabledInput}
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
      {error ? (
        <p className="text-red-700 text-sm mt-1">{error}</p>
      ) : hint ? (
        <p className="text-text-50 text-sm mt-1">{hint}</p>
      ) : (
        <div className="mt-6" />
      )}
    </div>
  );
};
