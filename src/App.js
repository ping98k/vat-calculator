import { useEffect, useState } from "react";

import "./App.css";
import { Item } from "./Item/Item";
const CHARGE_LIST = [
  { text: "service charge", value: "10" },
  { text: "vat", value: "7" },
];

function App() {
  const [list, setList] = useState([
    { text: "", value: "1" },
    { text: "", value: "2" },
    { text: "", value: "3" },
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
      VAT Calculator
      <br />
      item
      {list.map((item, index) => (
        <Item list={list} index={index} setList={setList} item={item} />
      ))}
      <button onClick={() => setList((l) => [...l, { text: "", value: "" }])}>
        +
      </button>
      charge
      {chargeList.map((item, index) => (
        <Item
          list={chargeList}
          index={index}
          setList={setChargeList}
          item={item}
        />
      ))}
      <br />
      <button
        onClick={() => setChargeList((l) => [...l, { text: "", value: "" }])}
      >
        +
      </button>
      <br />
      Total {total}
    </div>
  );
}

export default App;
