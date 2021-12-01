import React, { Suspense, useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import wallet connection
import Web3 from "web3";
import { EthereumContext } from "./context/EthereumContext";
// @import component
import Loading from "./components/Loading";
// import ScrollTop from "./components/ScrollTop";
// @import layout
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  const data = [{ ff: "fff" }, { ff222: "fff" }];
  const dddd = [{ ff: "ddd" }];
  const se = data.concat(dddd);
  console.log(se);
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");
  useEffect(() => {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
      // If the event is not dispatched by the end of the timeout
      // the user probably doesn't have MetaMask installed
      setTimeout(handleEthereum, 3000);
    }
  }, []);

  useEffect(() => {
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  const handleEthereum = () => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });

      setWeb3(new Web3(ethereum));
    } else {
      window.alert("Please install Metamask");
    }
  };

  const setCurrentlyConnectedAccount = async () => {
    let accounts = await web3.eth.getAccounts();
    if (accounts && accounts.length > 0) {
      console.log(accounts[0]);
      setCurrentAcc(accounts[0]);
    }
  };
  return (
    <EthereumContext.Provider
      value={{
        provider,
        accounts,
        web3,
        currentAcc,
      }}
    >
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route
              path={`/`}
              render={(props) => (
                <AppLayout>
                  <MintPage {...props} />
                </AppLayout>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </EthereumContext.Provider>
  );
}

export default App;
