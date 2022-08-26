import { AVALANCHE_NOT_INSTALLED_ERROR } from '@avalabs/avalanche-connector';
import { connector, hooks } from './connector.js';
import { ethers } from 'ethers';

const handleConnect = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
  } else {
    console.log(new Error('Install Metamask'));
  }
};

function App() {
  // const { useIsActive, useAccount, useError } = hooks;

  // const isActive = useIsActive();
  // const activeAccount = useAccount();
  // const error = useError();

  // if (error?.message === AVALANCHE_NOT_INSTALLED_ERROR) {
  //   console.log('Install Core Wallet');
  // }

  if (true) {
    return (
      <div className='App'>
        <button onClick={() => handleConnect()}>Connect Core</button>
        <button onClick={handleConnect}>Connect Metamask</button>
      </div>
    );
  }
}

export default App;
