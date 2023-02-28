import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  let price = "3 ETH";
  let handleSubmit = () => {
    setLoading(!loading);
  };
  let submitDisabled;
  // const { price, abi } = useContext(WrapperContext)
  return (
    <div>
      <h2 className="text-xl text-text-900 font-bold mb-4">
        NFT Minting Module
      </h2>
      <NumberStepper
        hint="Max 3"
        id="num-pudgys"
        label="Number of NFTs to Mint"
        initialValue={1}
        max={3}
        min={1}
      />
      <Button
        className="mt-4"
        id="mint"
        fullWidth
        onClick={handleSubmit}
        loading={loading}
      >{`Mint for ${price}`}</Button>
      <p className="text-sm text-text-50 mt-1">From contract 0x123...abc</p>
    </div>
  );
};
