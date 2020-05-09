import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import RpcHost from './components/RpcHost';
import SmartContractOp from './components/SmartContractOp';

function App() {
  const [currentHost, setCurrentHost] = useState('Not selected');
  const [currentSelHostVal, setCurrentSelHostVal] = useState('');
  const [contractOp, setContractOp] = useState('Origination');
  const [opAmt, setOpAmt] = useState(0);
  const [contractAddr, setContractAddr] = useState('');
  const [michelineCode, setMichelineCode] = useState('');
  const [storageCode, setStorageCode] = useState('');
  const [originationRes, setOriginationRes] = useState({
    operation_id: '',
    originated_contracts: [[]],
  });
  const [transactionRes, setTransactionRes] = useState({
    operation_id: '',
    originated_contracts: [[]],
  });

  return (
    <MainLayout>
      <RpcHost
        currentSelHostVal={currentSelHostVal}
        currentHost={currentHost}
        setCurrentSelHostVal={setCurrentSelHostVal}
        setCurrentHost={setCurrentHost}
      />
      <SmartContractOp
        contractOp={contractOp}
        opAmt={opAmt}
        contractAddr={contractAddr}
        michelineCode={michelineCode}
        storageCode={storageCode}
        originationRes={originationRes}
        transactionRes={transactionRes}
        setContractOp={setContractOp}
        setOpAmt={setOpAmt}
        setContractAddr={setContractAddr}
        setMichelineCode={setMichelineCode}
        setStorageCode={setStorageCode}
        setOriginationRes={setOriginationRes}
        setTransactionRes={setTransactionRes}
      />
    </MainLayout>
  );
}

export default App;
