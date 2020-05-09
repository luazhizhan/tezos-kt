// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const originationReq = (amt: string, code: any[], storage: {}) => ({
  method: 'inject_operations',
  operations: [
    {
      kind: 'origination',
      balance: amt,
      script: {
        code,
        storage,
      },
    },
  ],
});

export const transactionReq = (destination: string, amount: string, params: {}) => ({
  method: 'inject_operations',
  operations: [
    {
      kind: 'transaction',
      destination,
      amount,
      parameters: params,
    },
  ],
});
