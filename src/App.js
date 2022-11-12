import { useEffect, useState } from "react";

import "./App.css";
import { List } from "./List/List";
const CHARGE_LIST = [
  { id: "sc", text: "service charge", value: "10" },
  { id: "vat", text: "vat", value: "7" },
];

function App() {
  const [list, setList] = useState([
    { id: "1", text: "", value: "" },
    { id: "2", text: "", value: "" },
  ]);
  const [chargeList, setChargeList] = useState(CHARGE_LIST);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = list.reduce((s, i) => s + Number(i.value), 0);
    for (const c of chargeList) {
      sum += (sum * Number(c.value)) / 100;
    }
    setTotal(sum);
  }, [list, chargeList]);

  return (
    <div className="main">
      <h2>VAT Calculator</h2>
      <List list={list} setList={setList} />
      <List title="Charge" list={chargeList} setList={setChargeList} />
      <h2>Total {total}</h2>
    </div>
  );
}

export default App;
