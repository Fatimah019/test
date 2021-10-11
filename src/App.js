import React, { Fragment } from "react";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="app_body">
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
