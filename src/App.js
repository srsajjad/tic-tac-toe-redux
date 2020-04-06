import React from "react";
import Game from "./components/Game";

// redux imports
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Error boundary
import ErrorBoundary from "./ErrorBoundary";

import "./App.css";

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <Game />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
