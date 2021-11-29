import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import component
import Loading from "./components/Loading";
// @import layout
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  return (
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
  );
}

export default App;
