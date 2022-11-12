import { useState, useRef } from "react";
import lzbase62 from "lzbase62";

export const Save = ({ list, chargeList }) => {
  const inputRef = useRef();
  const [link, setLink] = useState("");
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          ref={inputRef}
          value={link}
          onChange={() => {}}
          style={{
            flex: 1,
            marginRight: 4,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "lightgray",
            borderStyle: "solid",
            height: 44,
          }}
        />
        <button
          style={{
            height: 44,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "lightgray",
            borderStyle: "solid",
          }}
          onClick={() => {
            const currentLocation = window.location;
            const data = JSON.stringify({ list, chargeList });
            const compressed = lzbase62.compress(data);
            const newLink = `${currentLocation.protocol}//${currentLocation.hostname}:${currentLocation.port}${currentLocation.pathname}#${compressed}`;
            setLink(newLink);
            const input = inputRef.current;
            input.focus();
            setTimeout(() => {
              input.select();
            }, 1);
          }}
        >
          {"Share link"}
        </button>
      </div>
    </div>
  );
};
