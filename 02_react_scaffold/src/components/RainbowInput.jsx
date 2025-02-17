import { useState } from "react";

const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8F00FF",
];

const RainbowInput = () => {
  const [inputText, setInputText] = useState("");

  const getColorForIndex = (index) => {
    return colors[index % colors.length];
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>输入文字，变成彩虹色</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        // placeholder="输入一些文字..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {inputText.split("").map((char, index) => (
          <span
            key={index}
            style={{ color: getColorForIndex(index), fontSize: "24px" }}
          >
            {char}
          </span>
        ))}
      </div>
      {inputText.length > 10 && <p>触发隐藏成就：彩虹大师！</p>}
    </div>
  );
};

export default RainbowInput;
