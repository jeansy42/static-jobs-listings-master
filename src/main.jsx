import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { JobsContext } from "./context/JobsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobsContext>
      <App />
    </JobsContext>
  </React.StrictMode>
);
