/* Adapted from https://github.com/ChangoMan/web3modal-example/blob/main/pages/index.tsx*/
import React, { createContext, useState, useEffect } from 'react';
import { useCallback, useReducer } from 'react';
import { utils, providers } from 'ethers';
import Web3Modal from 'web3modal';

import usePersistedState from '../helpers/usePersistedState.js';
import { initialWalletState, walletReducer } from './WalletState.js';
import { getChainData } from '../utils/chain.js';

const AuthContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const providerOptions = {};

var web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
  });
}

const initialStateAuth = {
  email: "",
  accountType: "",
  token: null,
};

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = usePersistedState("auth", initialStateAuth);
  const [state, dispatch] = useReducer(walletReducer, initialWalletState);
  const { provider, web3Provider, address, chainId } = state;
  const [balance, setBalance] = useState(0);

  // Connect to selected provider
  const connect = useCallback(async function () {
    // Initial provider (injected)
    const provider = await web3Modal.connect();

    // Plug injected provider into ethers
    const web3Provider = new providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();

    setBalance(utils.formatUnits(await web3Provider.getBalance(address)));

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider: provider,
      web3Provider, web3Provider,
      address: address,
      chainId: network.chainId,
    });
  }, []);

  // Disconnect: call provider
  const disconnect = useCallback(async function () {
    await web3Modal.clearCachedProvider();
    if (provider?.disconnect && typeof provider.disconnect === 'function') {
      await provider.disconnect();
    }
    dispatch({
      type: 'RESET_WEB3_PROVIDER',
    });
  }, [provider]);

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  const handleUpdateBalance = async () => {
    const newBal = await web3Provider?.getBalance(address);
    setBalance(utils.formatUnits(newBal));
  }

  const ownAddressFilter = {
    address: address,
    topics: [
        utils.id("Transfer(address,address,uint256)")
    ]
  };

  // Listen to account/network switch events
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log('Event: accountsChanged', accounts);
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        });
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log('Event: disconnect', error);
        disconnect();
      }

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);
      provider.on(ownAddressFilter, handleUpdateBalance);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      }
    }
  }, [provider, disconnect]);

  const chainData = getChainData(chainId);

  return (
    <AuthContext.Provider value={{
        authData: authData,
        provider,
        web3Provider,
        address,
        chainId,
        balance
    }}>
      <AuthDispatchContext.Provider value={{
          setAuthData: setAuthData,
          connect,
          disconnect
      }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, AuthDispatchContext, initialStateAuth };
