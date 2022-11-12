import { makeid } from "../helper";
import { Item } from "../Item/Item";
export const List = ({ title, list, setList }) => {
  return (
    <div>
      <h2>{title}</h2>
      {list.map((item, index) => (
        <Item
          key={item.id}
          list={list}
          index={index}
          setList={setList}
          item={item}
        />
      ))}
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{
            height: 44,
            flex: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "lightgray",
            borderStyle: "solid",
          }}
          onClick={() =>
            setList((l) => [...l, { id: makeid(), text: "", value: "" }])
          }
        >
          +
        </button>
      </div>
    </div>
  );
};
