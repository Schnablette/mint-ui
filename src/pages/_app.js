import "../styles/globals.css";
import { Web3Provider } from "../../components";

import contract from "../../artifacts/contracts/Schnabs.sol/Schnabs.json";

export default function App({ Component, pageProps }) {
  return (
    <Web3Provider
      contractAbi={contract.abi}
      contractAddress="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    >
      <Component {...pageProps} />
    </Web3Provider>
  );
}
