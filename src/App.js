import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import component
import Loading from "./components/Loading";
// @import pages
const Mint = React.lazy(() => import("./pages/Mint"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={`/`} render={(props) => <Mint {...props} />} />
          {/* <Route path={`/`} render={(props) => <Loading />} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
