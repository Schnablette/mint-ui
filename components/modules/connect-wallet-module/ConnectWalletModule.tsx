import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { useWeb3Context } from "../web-3-context";

import { Button } from "../../atoms";

interface ConnectWalletProps {
  /** ID for component */
  id: string;
  /** Additional props */
  [x: string]: any;
}

export const ConnectWalletModule = ({ id }: ConnectWalletProps) => {
  const { setProvider } = useWeb3Context();

  // const handleDisconnect = () => setConnected(false);

  // const [accont, setAccount] = useState();

  // useEffect(() => {
  //   const onAccountsChange = function (accounts) {
  //     setAccount(accounts[0]);
  //   };

  //   window.ethereum.on('accountsChanged', onAccountsChange);

  //   return () => window.ethereum.off("accountsChanged", onAccountsChange);
  // });

  const connectWallet = async () => {
    const newProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    try {
      await newProvider.send("eth_requestAccounts", []);
    } catch (err) {
      console.log(err);
    }

    const newSigner = newProvider.getSigner();
  };

  return (
    <div id={`${id}-wrapper`}>
      <Button id="wallet-connect" onClick={connectWallet}>
        Connect Wallet
      </Button>
    </div>
  );
};
