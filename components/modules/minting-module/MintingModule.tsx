import React from "react";
import { ethers } from "ethers";

import { NumberStepper, Button } from "../../atoms";
// import WrapperContext

interface mintingProps {
  /** ID for component */
  id: string;
  /** Additional props */
  [x: string]: any;
}

export const MintingModule = () => {
  let price = "3 ETH";
  let handleSubmit = () => undefined;
  let submitDisabled;
  // const { price, abi } = useContext(WrapperContext)
  return (
    <div>
      <h2>Pudgy Penguin NFTs</h2>
      <NumberStepper
        id="num-pudgys"
        label="Number of NFTs to Mint"
        initialValue={1}
        max={3}
        min={1}
      />
      <Button
        id="mint"
        onClick={handleSubmit}
        disabled={submitDisabled}
      >{`${price}`}</Button>
    </div>
  );
};
