import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [tableData, setTableData] = useState([]);

  function fillTableData(arr) {
    setTableData((prevState) => [...prevState, ...arr]);
  }

  function clearTable() {
    setTableData([]);
  }

  return (
    <main>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form fillTableData={fillTableData} resetTable={clearTable} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table tableData={tableData} />
    </main>
  );
}

export default App;
