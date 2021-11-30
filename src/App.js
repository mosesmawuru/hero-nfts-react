import React, { Suspense, useState, useMemo } from "react";
import Web3 from "./context/web3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import component
import Loading from "./components/Loading";
// @import layout
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  const [web3, setWeb3] = useState(null);
  const value = useMemo(() => ({ web3, setWeb3 }), [web3]);
  return (
    <Web3.Provider value={value}>
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
    </Web3.Provider>
  );
}

export default App;
