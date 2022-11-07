import { useEffect, useState } from "react";

const CHARGE_LIST = [
  { text: "service charge", value: "10" },
  { text: "vat", value: "7" },
];

function App() {
  const [list, setList] = useState([{ text: "", value: "" }]);
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
    <div>
      VAT Calculator
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  value={item.text}
                  onChange={(e) => {
                    setList((l) => {
                      const newList = [...l];
                      newList[index] = { ...l[index], text: e.target.value };
                      return newList;
                    });
                  }}
                />
              </td>
              <td>
                <input
                  value={item.value}
                  onChange={(e) => {
                    setList((l) => {
                      const newList = [...l];
                      newList[index] = { ...l[index], value: e.target.value };
                      return newList;
                    });
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => setList((l) => l.filter((i) => i !== item))}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setList((l) => [...l, { text: "", value: "" }])}>
        +
      </button>
      <br />
      <table>
        <tbody>
          {chargeList.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  value={item.text}
                  onChange={(e) => {
                    setChargeList((l) => {
                      const newList = [...l];
                      newList[index] = { ...l[index], text: e.target.value };
                      return newList;
                    });
                  }}
                />
              </td>
              <td>
                <input
                  value={item.value}
                  onChange={(e) => {
                    setChargeList((l) => {
                      const newList = [...l];
                      newList[index] = { ...l[index], value: e.target.value };
                      return newList;
                    });
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() =>
                    setChargeList((l) => l.filter((i) => i !== item))
                  }
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
