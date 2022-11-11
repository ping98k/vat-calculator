import { useState } from "react";
import "./Item.css";
export const Item = ({ item, list, index, setList }) => {
  const { text, value } = item;
  const [open, setOpen] = useState(false);
  return (
    <div className="item-main">
      <div className="item-row">
        <button className="button" onClick={() => setOpen(!open)}>
          ...
        </button>
        <input
          className="item-input item-name"
          style={{ marginLeft: 4, marginRight: 16 }}
          value={text}
          onChange={(e) =>
            setList((l) => {
              const newList = [...l];
              newList[index] = { ...newList[index], text: e.target.value };
              return newList;
            })
          }
        />
        <button
          className="button"
          onClick={() => {
            setList((l) => {
              const newList = [...l];
              newList[index] = {
                ...newList[index],
                value: Number(newList[index].value) - 1,
              };
              return newList;
            });
          }}
        >
          -1
        </button>
        <input
          className="item-input item-value"
          style={{ marginLeft: 4, marginRight: 4 }}
          value={value}
          onChange={(e) =>
            setList((l) => {
              const newList = [...l];
              newList[index] = { ...newList[index], value: e.target.value };
              return newList;
            })
          }
        />
        <button
          className="button"
          onClick={() => {
            setList((l) => {
              const newList = [...l];
              newList[index] = {
                ...newList[index],
                value: Number(newList[index].value) + 1,
              };
              return newList;
            });
          }}
        >
          +1
        </button>
      </div>
      {open && (
        <div className="item-row">
          <button
            style={{ ...styles.button, ...{ marginRight: 16 } }}
            onClick={() => {
              setList((l) => {
                return l.filter((i) => i !== item);
              });
            }}
          >
            Delete
          </button>

          <button
            style={{ ...styles.button, ...{ marginRight: 4 } }}
            onClick={() => {
              if (index === 0) return;
              setList((l) => {
                const newList = [...l];
                const temp = newList[index - 1];
                newList[index - 1] = newList[index];
                newList[index] = temp;
                return newList;
              });
            }}
          >
            Up
          </button>
          <button
            style={styles.button}
            onClick={() => {
              if (index === list.length - 1) return;
              setList((l) => {
                const newList = [...l];
                const temp = newList[index + 1];
                newList[index + 1] = newList[index];
                newList[index] = temp;
                return newList;
              });
            }}
          >
            Down
          </button>
          <button style={{ ...styles.button, ...{ marginLeft: 16 } }}>
            +/-
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgray",
    borderStyle: "solid",
  },
};
