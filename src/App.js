import { useEffect, useState } from "react";
import lzbase62 from "lzbase62";

import "./App.css";
import { List } from "./List/List";
import { Save } from "./Save/Save";
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
    const compressed = window.location.hash.replace("#", "");
    if (!compressed) return;
    try {
      const data = JSON.parse(lzbase62.decompress(compressed));
      setList(data.list);
      setChargeList(data.chargeList);
    } catch {}
  }, []);

  useEffect(() => {
    let sum = list.reduce((s, i) => s + Number(i.value), 0);
    for (const c of chargeList) {
      sum += (sum * Number(c.value)) / 100;
    }
    setTotal(sum);
  }, [list, chargeList]);

  return (
    <div className="main">
      <div
        style={{
          fontSize: 24,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        VAT Calculator: Total
        <input
          contentEditable={false}
          size={1}
          style={{
            flex: 1,
            marginLeft: 16,
            paddingRight: 8,
            textAlign: "right",
            fontWeight: "bold",
            fontSize: 24,
            borderRadius: 8,
            borderWidth: 0,
            height: 44,
          }}
          value={Math.round(total)}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={() => {}}
        />
      </div>

      <List list={list} setList={setList} />
      <List title="Charge" list={chargeList} setList={setChargeList} />
      <h2>Total {total}</h2>
      <Save list={list} chargeList={chargeList} />
    </div>
  );
}

export default App;
