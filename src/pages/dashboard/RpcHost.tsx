import React from 'react';
import { mainnetHosts, carthagenetHosts } from '../../utils/hosts';

function RpcHost(props: {
  currentSelHostVal: string;
  currentHost: string;
  setCurrentSelHostVal: React.Dispatch<React.SetStateAction<string>>;
  setCurrentHost: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { currentSelHostVal, currentHost, setCurrentSelHostVal, setCurrentHost } = props;
  const onRPCHostChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSelHostVal(event.currentTarget.value);
  };
  const onRPCHostClick = async () => {
    if (currentSelHostVal !== '') {
      try {
        const res = await tezbridge.request({
          method: 'set_host',
          host: currentSelHostVal,
        });
        if (res) setCurrentHost(currentSelHostVal);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        error.message ? alert(error.message) : alert(error);
      }
    } else {
      alert('Please select a RPC host');
    }
  };

  return (
    <div className="card">
      <h2>Select RPC host</h2>
      <label>Current Host: </label>
      <span>{currentHost}</span>
      <br />
      <select
        style={{ marginTop: '20px' }}
        id="rpcHost"
        onChange={(event) => onRPCHostChange(event)}
        value={currentSelHostVal}
      >
        <option value="">Not selected</option>
        <option value="mainnets" disabled>
          Mainnet Hosts
        </option>
        {mainnetHosts.map((host) => (
          <option key={host} value={host}>
            {host}
          </option>
        ))}
        <option value="carthagenets" disabled>
          Carthagenet Hosts
        </option>
        {carthagenetHosts.map((host) => (
          <option key={host} value={host}>
            {host}
          </option>
        ))}
      </select>
      <br />
      <button type="button" className="submitBtn" onClick={onRPCHostClick}>
        Submit
      </button>
    </div>
  );
}

export default RpcHost;
