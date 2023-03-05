import React, { useState } from "react";

import { NumberStepper, Button } from "../../atoms";
import { useWeb3Context } from "../web-3-context";
// import WrapperContext

interface MintingProps {
  /** ID for component */
  id: string;
  /** Additional props */
  [x: string]: any;
}

export const MintingModule = ({ id }: MintingProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {} = useWeb3Context();

  const handleSubmit = () => {};

  return (
    <>
      <NumberStepper
        disabled={false}
        hint="Max 3"
        id="num-pudgys"
        initialValue={1}
        label="Number of NFTs to Mint"
        max={3}
        min={1}
      />
      <Button
        className="mt-4"
        id="mint"
        fullWidth
        onClick={handleSubmit}
        loading={loading}
        disabled={loading || !!error}
      >{`Mint with ETH`}</Button>
      <p className="text-sm text-text-50 mt-1">From contract 0x123...abc</p>
    </>
  );
};
