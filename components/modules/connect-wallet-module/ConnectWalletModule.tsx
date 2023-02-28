import React, { useState } from "react";
import { Button } from "../../atoms";

interface ConnectWalletProps {
  /** ID for component */
  id: string;
  /** Additional props */
  [x: string]: any;
}

export const ConnectWalletModule = ({ id }: ConnectWalletProps) => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConnect = () => undefined;

  return (
    <div id={`${id}-wrapper`}>
      {connected ? (
        <p>Wallet Connected</p>
      ) : (
        <Button id="wallet-connect" onClick={handleConnect} loading={loading}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};
