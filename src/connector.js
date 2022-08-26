import { initializeConnector } from '@web3-react/core';
import { Avalanche } from '@avalabs/avalanche-connector';

export const [connector, hooks, x] = initializeConnector(
  (actions) => new Avalanche(actions, true)
);
