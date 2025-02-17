// import HelloWorld from "./components/HelloWorld";
// import TaskList from "./components/TaskList";
import RainbowInput from "./components/RainbowInput";
// import RainbowText from "./components/RainbowText";

// 定义样式
const center = {
  display: "flex",
  justifyContent: "center", // 水平居中
  alignItems: "center", // 垂直居中
  height: "100vh", // 使容器占满整个视口高度
  backgroundColor: "#f0f0f0", // 可选：添加背景色
};

function App() {
  return (
    <div style={center}>
      <RainbowInput />
      {/* <RainbowText /> */}
    </div>
  );
}

export default App;
