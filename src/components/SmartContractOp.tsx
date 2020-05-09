import React from 'react';
import TezBridgeRes from '../interfaces/TezBridgeRes';
import { originTezBridgeReq, txnTezBridgeReq, checkOpInput } from '../services/TezBridge';

function SmartContractOp(props: {
  opAmt: number;
  contractOp: string;
  michelineCode: string;
  storageCode: string;
  contractAddr: string;
  originationRes: TezBridgeRes;
  transactionRes: TezBridgeRes;
  setContractOp: React.Dispatch<React.SetStateAction<string>>;
  setOpAmt: React.Dispatch<React.SetStateAction<number>>;
  setContractAddr: React.Dispatch<React.SetStateAction<string>>;
  setMichelineCode: React.Dispatch<React.SetStateAction<string>>;
  setStorageCode: React.Dispatch<React.SetStateAction<string>>;
  setOriginationRes: React.Dispatch<React.SetStateAction<TezBridgeRes>>;
  setTransactionRes: React.Dispatch<React.SetStateAction<TezBridgeRes>>;
}) {
  const {
    opAmt,
    contractOp,
    michelineCode,
    storageCode,
    contractAddr,
    originationRes,
    transactionRes,
    setContractOp,
    setOpAmt,
    setContractAddr,
    setMichelineCode,
    setStorageCode,
    setOriginationRes,
    setTransactionRes,
  } = props;

  const onSCOpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setContractOp(event.currentTarget.value);
    }
  };

  const onAmtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpAmt(+event.currentTarget.value);
  };

  const onContractAddrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddr(event.currentTarget.value);
  };

  const onMichelineCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMichelineCode(event.currentTarget.value);
  };

  const onStorageCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStorageCode(event.currentTarget.value);
  };

  const clearRes = (isOrigination: boolean) => {
    setOpAmt(0);
    setContractAddr('');
    setMichelineCode('');
    setStorageCode('');
    /* eslint-disable @typescript-eslint/no-unused-expressions */
    isOrigination
      ? setTransactionRes({
          operation_id: '',
          originated_contracts: [[]],
        })
      : setOriginationRes({
          operation_id: '',
          originated_contracts: [[]],
        });
  };

  const onSCOpClick = async () => {
    try {
      const amtStr = (opAmt * 1000000).toString();
      checkOpInput(contractOp, michelineCode, storageCode, contractAddr);
      if (contractOp === 'Origination') {
        const res = await originTezBridgeReq(amtStr, michelineCode, storageCode);
        setOriginationRes(res);
        clearRes(true);
      } else {
        const res = await txnTezBridgeReq(amtStr, michelineCode, contractAddr);
        setTransactionRes({
          operation_id: res.operation_id,
          originated_contracts: [[]],
        });
        clearRes(false);
      }
    } catch (error) {
      error.message ? alert(error.message) : alert(error);
    }
  };

  return (
    <div className="card">
      <h2>Smart Contract Operation</h2>
      <div>
        <label>Operation Type: </label>
        <br />
        <input
          className="cardDiv"
          type="radio"
          value="Origination"
          name="Origination"
          checked={contractOp === 'Origination'}
          onChange={(event) => onSCOpChange(event)}
        />{' '}
        Origination
        <input
          type="radio"
          value="Transaction"
          name="Transaction"
          checked={contractOp === 'Transaction'}
          onChange={(event) => onSCOpChange(event)}
        />{' '}
        Transaction
      </div>

      {/* Transaction Result */}
      <div className="cardDiv" hidden={transactionRes.operation_id === ''}>
        <h3>Transaction Result</h3>
        <label>Operation ID: </label>
        <a
          href={`https://you.better-call.dev/opg/${transactionRes.operation_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {transactionRes.operation_id}
        </a>
      </div>

      {/* Origination Result */}
      <div className="cardDiv" hidden={originationRes.operation_id === ''}>
        <h3>Origination Result</h3>
        <label>Operation ID: </label>
        <a
          href={`https://you.better-call.dev/opg/${originationRes.operation_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {originationRes.operation_id}
        </a>
        <br />
        <label>Originated Contract: </label>
        <span>{originationRes.originated_contracts[0][0]}</span>
      </div>

      {/* Contract Address - Transaction Only */}
      <div className="cardDiv" hidden={contractOp === 'Origination'}>
        <label>Contract Address: </label>
        <br />
        <input
          type="text"
          value={contractAddr}
          onChange={(event) => onContractAddrChange(event)}
          style={{ width: '80%', height: '28px', marginTop: '16px' }}
        />
      </div>

      {/* Amount (tez) */}
      <div className="cardDiv">
        <label>Amount (tez): </label>
        <br />
        <input
          type="number"
          min={0}
          value={opAmt}
          onChange={(event) => onAmtChange(event)}
          style={{ width: '80%', height: '28px', marginTop: '16px' }}
        />
      </div>

      {/* Micheline Code / Parameters */}
      <div className="cardDiv" hidden={false}>
        <label>Micheline Code / Parameters*: </label>
        <p style={{ fontSize: '12px' }}>*For integer value, please set it as string</p>
        <textarea
          cols={100}
          value={michelineCode}
          onChange={(event) => onMichelineCodeChange(event)}
          style={{ width: '80%', minHeight: '300px', marginTop: '16px' }}
        />
      </div>

      {/* Storage Code - Origination Only */}
      <div className="cardDiv" hidden={contractOp === 'Transaction'}>
        <label>Storage Code (Micheline): </label>
        <br />
        <textarea
          cols={100}
          value={storageCode}
          onChange={(event) => onStorageCodeChange(event)}
          style={{ width: '80%', minHeight: '300px', marginTop: '16px' }}
        />
      </div>
      <button type="button" className="submitBtn" onClick={onSCOpClick}>
        Submit
      </button>
    </div>
  );
}

export default SmartContractOp;
