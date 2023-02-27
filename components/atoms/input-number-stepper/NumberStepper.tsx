import React, { useState } from "react";

import "./numberStepperStyles.css";

export interface NumberStepperProps {
  /** First number in the input */
  initialValue: number;
  /** Biggest possible option */
  max: number;
  /** Smallest possible option */
  min: number;
  /** Additional props */
  [x: string]: any;
}

export const NumberStepper = ({
  initialValue = 0,
  max = 100,
  min = 0,
}: NumberStepperProps) => {
  const [value, setValue] = useState(initialValue);
  const [decreaseDisabled, setDecreaseDisabled] = useState(
    initialValue === min || initialValue < min
  );
  const [increaseDisabled, setIncreaseDisabled] = useState(
    initialValue === max || initialValue > max
  );

  const decreaseNum = () => {

  }

  const increaseNum = () => {
    
  }

  return (
    <>
      <label htmlFor="number-input">Number Input</label>
      <div className="rounded border-solid border-purple-500 border-2 w-fit">
        <div className="flex align-center">
          <button
            aria-label="decrease"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300"
            disabled={decreaseDisabled}
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
          />
          <button
            aria-label="increase"
            className="px-1 h-[32px] bg-purple-500 hover:bg-purple-400 text-white focus:outline-purple-300 focus:outline-2 focus:outline-offset-4 active:bg-purple-300"
            disabled={increaseDisabled}
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
    </>
  );
};
