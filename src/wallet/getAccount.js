import getWeb3 from "../getWeb3";

export async function getAccount() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  return accounts[0];
}
