import React, {StrictMode} from "react";
import { HashRouter } from "react-router-dom";
import RenderPage from "./RenderPage";
import "./App.css"

function App() {
  return (
    <StrictMode>
      <div className="App">
        <HashRouter>
            <RenderPage />
        </HashRouter>
      </div>
    </StrictMode>
  );
}

export default App;
