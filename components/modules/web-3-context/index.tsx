import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type IWeb3Context = {
  /** Wallet address */
  provider?: string;
  /** Method for setting provider */
  setProvider: React.Dispatch<React.SetStateAction<string | undefined>>;
  /** Method for setting signer */
  setSigner: React.Dispatch<React.SetStateAction<string | undefined>>;
  /** Wallet address to sign contracts */
  signer?: string;
};

const Web3Context = createContext<IWeb3Context>({} as any);

interface Prop {
  /** Children of component */
  children?: React.ReactNode;
}

export const Web3Provider: React.FC<Prop> = (props) => {
  const [provider, setProvider] = useState<string>();
  const [signer, setSigner] = useState<string>();
  const [contractABI, setContractABI] = useState([]);
  const val = useMemo(
    () => ({ setProvider, provider, contractABI, setContractABI }),
    [setProvider, provider, contractABI, setContractABI]
  );

  useEffect(() => {}, [provider]);

  return (
    <Web3Context.Provider value={val}>{props.children}</Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  return useContext(Web3Context);
};
