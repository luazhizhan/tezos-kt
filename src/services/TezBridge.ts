import { originationReq, transactionReq } from '../utils/tezBridgeReq';

export const checkOpInput = (
  contractOpType: string,
  michelineCode: string,
  storageCode: string,
  contractAddr: string,
) => {
  if (contractOpType === 'Origination' && michelineCode === '' && storageCode === '') {
    throw new Error('Please fill up all the blanks');
  } else if (michelineCode === '' && contractAddr === '') {
    throw new Error('Please fill up all the blanks');
  }
};

export const originTezBridgeReq = async (
  amtStr: string,
  michelineCode: string,
  storageCode: string,
) => {
  const code = JSON.parse(michelineCode);
  const storage = JSON.parse(storageCode);
  return tezbridge.request(originationReq(amtStr, code, storage));
};

export const txnTezBridgeReq = async (
  amtStr: string,
  michelineCode: string,
  contractAddr: string,
) => {
  const params = JSON.parse(michelineCode);
  return tezbridge.request(transactionReq(contractAddr, amtStr, params));
};
