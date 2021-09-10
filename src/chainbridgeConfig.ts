import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type ChainType = "Ethereum" | "Substrate";

export type BridgeConfig = {
  networkId?: number;
  chainId: number;
  name: string;
  rpcUrl: string;
  type: ChainType;
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  decimals: number;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: string;
  erc20HandlerAddress: string;
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type SubstrateBridgeConfig = BridgeConfig & {
  type: "Substrate";
  chainbridgePalletName: string;
  transferPalletName: string;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | SubstrateBridgeConfig>;
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Ethereum Rinkeby <> Privi Substrate
  chains: [
    {
      chainId: 4,
      networkId: 4,
      name: "Ethereum - Rinkedby",
      decimals: 18,
      bridgeAddress: "0x66C54A56e6b934EbAf499F34AB89BfDF9ccf0bFA",
      erc20HandlerAddress: "0x6E310260B025006D8E65C1F1aEA0eE9FCc56FB9c",
      rpcUrl: "wss://rinkeby.infura.io/w3/v3/17474c6cdec64607bb64bc4690719fdf",
      type: "Ethereum",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
          name: "DAI",
          symbol: "DAI",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
    {
      chainId: 99,
      networkId: 99,
      name: "Substrate - Privi",
      decimals: 18,
      rpcUrl: "wss://privisubstrate.com",
      type: "Substrate",
      nativeTokenSymbol: "DOT",
      chainbridgePalletName: "chainBridge",
      transferPalletName: "example",
      tokens: [
        {
          address: "substrate-native",
          name: "TOKEN",
          symbol: "TOKEN",
          resourceId: "substrate-native",
        },
      ],
    },
  ],
};
