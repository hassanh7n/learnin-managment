import { useState } from "react";

import "./App.css";
import TopPage from "./widgets/TopPage";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div>
      <TopPage />
      <Landing />
    </div>
  );
}

export default App;
