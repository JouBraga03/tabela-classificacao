import "./App.css";

import Layout from "./components/Layout";

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
